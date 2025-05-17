'use client';

import React, { useRef, useState, useEffect } from 'react';

// Define types for audio data
interface AudioData {
    volume: number;
    bass: number;
    mid: number;
    treble: number;
    beat: boolean;
    frequencyData: number[];
}

interface AudioAnalyzerProps {
    onAudioData: (data: AudioData) => void;
}

const AudioAnalyzer: React.FC<AudioAnalyzerProps> = ({ onAudioData }) => {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [dataArray, setDataArray] = useState<Uint8Array | null>(null);
    const [audioSource, setAudioSource] = useState<MediaStreamAudioSourceNode | null>(null);
    const [isListening, setIsListening] = useState(false);
    const animationRef = useRef<number | null>(null);

    const initAudio = async () => {
        try {
            // Create audio context with proper type handling for older browsers
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContextClass) {
                throw new Error('AudioContext not supported in this browser');
            }

            const context = new AudioContextClass();

            // Create analyzer
            const analyzerNode = context.createAnalyser();
            analyzerNode.fftSize = 256;
            analyzerNode.smoothingTimeConstant = 0.8;

            const bufferLength = analyzerNode.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            setAudioContext(context);
            setAnalyser(analyzerNode);
            setDataArray(dataArray);

            if (navigator.mediaDevices) {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const source = context.createMediaStreamSource(stream);
                source.connect(analyzerNode);
                setAudioSource(source);
                setIsListening(true);
            } else {
                console.error('Media devices not supported');
            }
        } catch (error) {
            console.error('Error initializing audio:', error);
        }
    };

    const toggleAudio = async () => {
        if (isListening) {
            // Stop listening
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (audioSource) {
                audioSource.disconnect();
            }
            if (audioContext) {
                await audioContext.close();
            }
            setIsListening(false);
            setAudioContext(null);
            setAnalyser(null);
            setAudioSource(null);
        } else {
            // Start listening
            await initAudio();
        }
    };

    // Process audio data
    useEffect(() => {
        if (!analyser || !dataArray) return;

        const updateAudioData = () => {
            analyser.getByteFrequencyData(dataArray);

            // Calculate audio metrics
            let bass = 0;
            let mid = 0;
            let treble = 0;
            let total = 0;

            // Bass frequencies (0-100Hz ~ first 5-10 bins)
            for (let i = 0; i < 10; i++) {
                bass += dataArray[i];
            }
            bass = bass / 10 / 255;  // Normalize

            // Mid frequencies (100-2000Hz ~ next ~30 bins)
            for (let i = 10; i < 40; i++) {
                mid += dataArray[i];
            }
            mid = mid / 30 / 255;  // Normalize

            // Treble frequencies (2000Hz+ ~ remaining bins)
            for (let i = 40; i < dataArray.length; i++) {
                treble += dataArray[i];
            }
            treble = treble / (dataArray.length - 40) / 255;  // Normalize

            // Overall volume
            for (let i = 0; i < dataArray.length; i++) {
                total += dataArray[i];
            }
            const volume = total / dataArray.length / 255;  // Normalize

            // Calculate beat detection (simple algorithm)
            const beat = bass > 0.8 && bass > mid * 1.5;

            // Pass audio data to parent component
            onAudioData({
                volume,
                bass,
                mid,
                treble,
                beat,
                frequencyData: Array.from(dataArray)
            });

            animationRef.current = requestAnimationFrame(updateAudioData);
        };

        updateAudioData();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [analyser, dataArray, onAudioData]);

    return (
        <div className="absolute bottom-4 left-4 z-10">
            <button
                onClick={toggleAudio}
                className={`px-4 py-2 rounded-lg ${isListening ? 'bg-red-500' : 'bg-green-500'} text-white font-medium`}
            >
                {isListening ? 'Stop Audio Reactivity' : 'Enable Audio Reactivity'}
            </button>
        </div>
    );
};

export default AudioAnalyzer;