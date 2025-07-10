"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Music } from "lucide-react";

// Enhanced animated intro component with 42-second narrative
const AnimatedIntro = ({ 
  isPlaying, 
  onComplete, 
  isMuted, 
  onToggleMute,
  onPlayStateChange,
  currentSceneIndex,
  setCurrentSceneIndex
}: { 
  isPlaying: boolean; 
  onComplete: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onPlayStateChange: (playing: boolean) => void;
  currentSceneIndex: number;
  setCurrentSceneIndex: (index: number) => void;
}) => {
  const scenes = [
    // Part 1: The Hook (0-5 seconds)
    { 
      text: "Vikas Meena", 
      duration: 2500, 
      type: "name",
      subtitle: ""
    },
    { 
      text: "Senior Product Leader", 
      duration: 2500, 
      type: "title",
      subtitle: ""
    },
    
    // Part 2: The Foundation (6-12 seconds)
    { 
      text: "Strategic Foundation", 
      duration: 3000, 
      type: "foundation",
      subtitle: "MBA from IIM Bangalore",
      logo: "IIMB"
    },
    { 
      text: "Technical Roots", 
      duration: 3000, 
      type: "foundation",
      subtitle: "B.Tech in Computer Science from NITK",
      logo: "NITK"
    },
    
    // Part 3: The Impact (13-33 seconds)
    { 
      text: "Enhanced platform trust by reducing fraud reports by", 
      duration: 5000, 
      type: "impact",
      metric: "80%",
      company: "Matrimony.com"
    },
    { 
      text: "Increased annual revenue by", 
      duration: 5000, 
      type: "impact",
      metric: "$5M+",
      company: "Hubzu"
    },
    { 
      text: "Co-founded & launched a B2B SaaS platform from", 
      duration: 6000, 
      type: "impact",
      metric: "0 to 1",
      company: "Khambee",
      subtitle: "Managed 40+ team members, generating ₹21 Lakhs"
    },
    { 
      text: "Scaled platform to", 
      duration: 5000, 
      type: "impact",
      metric: "25K+",
      company: "Perpule (Acquired by Amazon)",
      subtitle: "Daily Active Users"
    },
    
    // Part 4: Philosophy & CTA (34-42 seconds)
    { 
      text: "Driven by empathy, data & urgency", 
      duration: 3000, 
      type: "philosophy",
      subtitle: ""
    },
    { 
      text: "Let's build what matters", 
      duration: 2000, 
      type: "cta",
      subtitle: ""
    },
    { 
      text: "📍 meenavik.com", 
      duration: 3000, 
      type: "contact",
      subtitle: ""
    }
  ];

  const [animationKey, setAnimationKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioReady, setAudioReady] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  // Create professional ambient background music using Web Audio API
  const createProfessionalAmbientMusic = async (): Promise<HTMLAudioElement> => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) {
        throw new Error('Web Audio API not supported');
      }

      const audioContext = new AudioContextClass();
      const sampleRate = audioContext.sampleRate;
      const duration = 42;
      const bufferLength = sampleRate * duration;

      // Create stereo buffer for richer sound
      const audioBuffer = audioContext.createBuffer(2, bufferLength, sampleRate);
      const leftChannel = audioBuffer.getChannelData(0);
      const rightChannel = audioBuffer.getChannelData(1);

      // Professional ambient music generation
      for (let i = 0; i < bufferLength; i++) {
        const time = i / sampleRate;
        
        // Create multiple layers for rich ambient sound
        let leftSample = 0;
        let rightSample = 0;

        // Layer 1: Deep pad (C major chord progression)
        const chordProgression = [
          { freq: 130.81, amp: 0.08 }, // C3
          { freq: 164.81, amp: 0.06 }, // E3
          { freq: 196.00, amp: 0.05 }, // G3
        ];

        chordProgression.forEach(({ freq, amp }) => {
          const wave = Math.sin(2 * Math.PI * freq * time);
          leftSample += wave * amp;
          rightSample += wave * amp * 0.9; // Slight stereo separation
        });

        // Layer 2: Atmospheric pad (higher octave)
        const atmosphericFreqs = [261.63, 329.63, 392.00]; // C4, E4, G4
        atmosphericFreqs.forEach((freq, index) => {
          const wave = Math.sin(2 * Math.PI * freq * time);
          const amp = 0.04 * (1 + 0.3 * Math.sin(2 * Math.PI * time / 16)); // Slow modulation
          leftSample += wave * amp * (index % 2 === 0 ? 1 : 0.8);
          rightSample += wave * amp * (index % 2 === 0 ? 0.8 : 1);
        });

        // Layer 3: Subtle bass drone
        const bassFreq = 65.41; // C2
        const bassWave = Math.sin(2 * Math.PI * bassFreq * time);
        const bassAmp = 0.03 * (1 + 0.2 * Math.sin(2 * Math.PI * time / 32));
        leftSample += bassWave * bassAmp;
        rightSample += bassWave * bassAmp;

        // Layer 4: Gentle high frequencies for sparkle
        const sparkleFreqs = [523.25, 659.25, 783.99]; // C5, E5, G5
        sparkleFreqs.forEach((freq, index) => {
          const wave = Math.sin(2 * Math.PI * freq * time);
          const amp = 0.015 * (1 + 0.5 * Math.sin(2 * Math.PI * time / 8 + index));
          leftSample += wave * amp * Math.sin(2 * Math.PI * time / 4);
          rightSample += wave * amp * Math.cos(2 * Math.PI * time / 4);
        });

        // Add subtle noise for texture
        const noise = (Math.random() - 0.5) * 0.005;
        leftSample += noise;
        rightSample += noise;

        // Apply envelope for smooth fade in/out
        let envelope = 1;
        if (time < 3) {
          envelope = Math.sin((Math.PI / 2) * (time / 3)); // Smooth fade in
        } else if (time > duration - 3) {
          envelope = Math.sin((Math.PI / 2) * ((duration - time) / 3)); // Smooth fade out
        }

        // Apply gentle compression and limiting
        leftSample = Math.tanh(leftSample * 2) * 0.5;
        rightSample = Math.tanh(rightSample * 2) * 0.5;

        // Final volume and envelope
        leftChannel[i] = leftSample * envelope * 0.3;
        rightChannel[i] = rightSample * envelope * 0.3;
      }

      // Convert to WAV and create audio element
      const wavBlob = audioBufferToWav(audioBuffer);
      const audioUrl = URL.createObjectURL(wavBlob);

      const audio = new Audio();
      audio.src = audioUrl;
      audio.loop = true;
      audio.volume = isMuted ? 0 : 0.4;
      audio.preload = 'auto';

      return new Promise<HTMLAudioElement>((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Audio loading timeout'));
        }, 5000);

        audio.addEventListener('canplaythrough', () => {
          clearTimeout(timeout);
          console.log('✅ Professional ambient music ready');
          resolve(audio);
        });

        audio.addEventListener('error', (e) => {
          clearTimeout(timeout);
          console.error('❌ Audio error:', e);
          reject(new Error('Failed to load audio'));
        });
      });

    } catch (error) {
      console.error('Audio creation error:', error);
      throw error;
    }
  };

  // Convert AudioBuffer to WAV (stereo support)
  const audioBufferToWav = (buffer: AudioBuffer): Blob => {
    const length = buffer.length;
    const sampleRate = buffer.sampleRate;
    const numChannels = buffer.numberOfChannels;
    const arrayBuffer = new ArrayBuffer(44 + length * numChannels * 2);
    const view = new DataView(arrayBuffer);

    // WAV header
    const writeString = (offset: number, string: string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + length * numChannels * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * 2, true);
    view.setUint16(32, numChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, length * numChannels * 2, true);

    // Interleave channels and convert to 16-bit PCM
    let offset = 44;
    for (let i = 0; i < length; i++) {
      for (let channel = 0; channel < numChannels; channel++) {
        const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
        view.setInt16(offset, sample * 0x7FFF, true);
        offset += 2;
      }
    }

    return new Blob([arrayBuffer], { type: 'audio/wav' });
  };

  // Initialize audio
  useEffect(() => {
    let mounted = true;

    const initAudio = async () => {
      try {
        console.log('🎵 Creating professional ambient music...');
        setAudioError(null);
        
        const audio = await createProfessionalAmbientMusic();
        
        if (mounted) {
          audioRef.current = audio;
          setAudioReady(true);
          console.log('✅ Professional ambient music ready');
        }
      } catch (error) {
        console.error('❌ Failed to create audio:', error);
        if (mounted) {
          setAudioError(error instanceof Error ? error.message : 'Audio creation failed');
        }
      }
    };

    initAudio();

    return () => {
      mounted = false;
      if (audioRef.current) {
        audioRef.current.pause();
        if (audioRef.current.src.startsWith('blob:')) {
          URL.revokeObjectURL(audioRef.current.src);
        }
      }
    };
  }, []);

  // Handle mute/unmute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 0.4;
    }
  }, [isMuted]);

  // Handle play/pause audio
  useEffect(() => {
    if (!audioRef.current || !audioReady) return;

    const playAudio = async () => {
      try {
        if (isPlaying && currentSceneIndex === 0) {
          console.log('▶️ Starting ambient music...');
          await audioRef.current!.play();
        } else if (!isPlaying) {
          console.log('⏸️ Pausing ambient music...');
          audioRef.current!.pause();
        }
      } catch (error) {
        console.error('❌ Audio playback error:', error);
        setAudioError('Playback failed - user interaction required');
      }
    };

    playAudio();
  }, [isPlaying, currentSceneIndex, audioReady]);

  // Scene progression logic
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    const currentSceneDuration = scenes[currentSceneIndex]?.duration || 3000;
    
    timerRef.current = setTimeout(() => {
      if (currentSceneIndex >= scenes.length - 1) {
        onComplete();
        if (audioRef.current) {
          audioRef.current.pause();
        }
        return;
      }
      setCurrentSceneIndex(currentSceneIndex + 1);
    }, currentSceneDuration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, currentSceneIndex, onComplete, setCurrentSceneIndex]);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentSceneIndex]);

  const currentSceneData = scenes[currentSceneIndex];
  if (!currentSceneData) return null;

  const highlightText = (text: string) => {
    const highlights = {
      "Vikas Meena": "#00FFB2",
      "Senior Product Leader": "#00FFB2",
      "Strategic": "#00FFB2",
      "Technical": "#00FFB2",
      "80%": "#00FFB2",
      "$5M+": "#00FFB2",
      "0 to 1": "#00FFB2",
      "25K+": "#00FFB2",
      "empathy": "#00FFB2",
      "data": "#00FFB2",
      "urgency": "#00FFB2",
      "build": "#00FFB2",
      "matters": "#00FFB2",
      "meenavik.com": "#00FFB2"
    };

    let result = text;
    Object.entries(highlights).forEach(([word, color]) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(regex, `<span style="color: ${color}; font-weight: bold;">${word}</span>`);
    });
    return result;
  };

  const getSceneLayout = () => {
    switch (currentSceneData.type) {
      case "name":
        return (
          <motion.div
            key={`scene-${currentSceneIndex}-${animationKey}`}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
              }}
              dangerouslySetInnerHTML={{
                __html: highlightText(currentSceneData.text)
              }}
            />
          </motion.div>
        );

      case "title":
        return (
          <motion.div
            key={`scene-${currentSceneIndex}-${animationKey}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-5xl font-semibold text-white"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
              }}
              dangerouslySetInnerHTML={{
                __html: highlightText(currentSceneData.text)
              }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-[#00FFB2] mx-auto mt-4 rounded-full"
            />
          </motion.div>
        );

      case "foundation":
        return (
          <motion.div
            key={`scene-${currentSceneIndex}-${animationKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-[#00FFB2]">
                {currentSceneData.logo}
              </span>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                dangerouslySetInnerHTML={{
                  __html: highlightText(currentSceneData.text)
                }}
              />
              <p className="text-lg text-white/80">{currentSceneData.subtitle}</p>
            </motion.div>
          </motion.div>
        );

      case "impact":
        return (
          <motion.div
            key={`scene-${currentSceneIndex}-${animationKey}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-lg text-[#00FFB2] font-semibold">
                {currentSceneData.company}
              </span>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span
                className="text-4xl md:text-6xl font-bold text-[#00FFB2] block mb-2"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  textShadow: '0 4px 20px rgba(0, 255, 178, 0.3)'
                }}
              >
                {currentSceneData.metric}
              </span>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white"
              dangerouslySetInnerHTML={{
                __html: highlightText(currentSceneData.text)
              }}
            />
            
            {currentSceneData.subtitle && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-white/80 mt-2"
              >
                {currentSceneData.subtitle}
              </motion.p>
            )}
          </motion.div>
        );

      case "philosophy":
        return (
          <motion.div
            key={`scene-${currentSceneIndex}-${animationKey}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-white leading-relaxed"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
              }}
              dangerouslySetInnerHTML={{
                __html: highlightText(currentSceneData.text)
              }}
            />
          </motion.div>
        );

      case "cta":
        return (
          <motion.div
            key={`scene-${currentSceneIndex}-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold text-white"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
              }}
              dangerouslySetInnerHTML={{
                __html: highlightText(currentSceneData.text)
              }}
            />
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            key={`scene-${currentSceneIndex}-${animationKey}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-8 h-8 text-[#00FFB2]"
              >
                📍
              </motion.div>
              <h2
                className="text-3xl md:text-5xl font-bold text-[#00FFB2]"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  textShadow: '0 4px 20px rgba(0, 255, 178, 0.3)'
                }}
              >
                meenavik.com
              </h2>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`${animationKey}-${i}`}
            className="absolute w-1 h-1 bg-[#00FFB2] rounded-full opacity-30"
            style={{
              left: `${(i % 5) * 20 + 10}%`,
              top: `${Math.floor(i / 5) * 20 + 10}%`,
            }}
            animate={{
              y: [-20, -120],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-8 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {getSceneLayout()}
        </AnimatePresence>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {scenes.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index <= currentSceneIndex ? 'bg-[#00FFB2] w-8' : 'bg-white/30 w-2'
            }`}
            initial={{ width: 8 }}
            animate={{ 
              width: index === currentSceneIndex ? 32 : 8,
              backgroundColor: index <= currentSceneIndex ? '#00FFB2' : 'rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </div>

      {/* Audio control */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onToggleMute();
        }}
        className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={!audioReady}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </motion.button>

      {/* Enhanced audio status indicator */}
      <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 text-white/60 text-xs">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            audioReady && isPlaying && !isMuted ? 'bg-green-400 animate-pulse' : 
            audioReady ? 'bg-yellow-400' : 
            'bg-red-400'
          }`}></div>
          <span>
            {!audioReady ? 'Creating Music...' :
             audioError ? 'Audio Error' :
             isPlaying && !isMuted ? 'Ambient Music Playing' : 
             isPlaying && isMuted ? 'Music Muted' :
             'Music Ready'}
          </span>
        </div>
        {audioError && (
          <div className="text-red-300 text-xs max-w-48 text-right">
            {audioError}
          </div>
        )}
        {audioReady && (
          <div className="text-white/40 text-xs">
            Professional Ambient Music • Stereo
          </div>
        )}
      </div>
    </div>
  );
};

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(prev => !prev);
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSceneIndex(0);
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
      setHasStarted(true);
    }, 100);
  };

  const handleComplete = () => {
    setIsPlaying(false);
    setCurrentSceneIndex(0);
  };

  const handleToggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsMuted(prev => !prev);
  };

  const handlePlayStateChange = (playing: boolean) => {
    setIsPlaying(playing);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            From Code to Customer
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A Product Leader's Journey - 42 seconds showcasing the path from technical foundation to driving measurable business impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div 
                className="relative aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 cursor-pointer"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                {hasStarted ? (
                  <AnimatedIntro 
                    isPlaying={isPlaying} 
                    onComplete={handleComplete}
                    isMuted={isMuted}
                    onToggleMute={handleToggleMute}
                    onPlayStateChange={handlePlayStateChange}
                    currentSceneIndex={currentSceneIndex}
                    setCurrentSceneIndex={setCurrentSceneIndex}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          onClick={handlePlayPause}
                          className="bg-[#00FFB2] hover:bg-[#00E6A0] text-black rounded-full w-20 h-20 p-0 mb-6 shadow-lg shadow-[#00FFB2]/25"
                        >
                          <Play className="w-8 h-8 ml-1" fill="currentColor" />
                        </Button>
                      </motion.div>
                      <p className="text-white font-semibold text-xl mb-2">
                        Watch Product Leader Journey
                      </p>
                      <p className="text-white/70 text-sm mb-4">
                        42 seconds • Professional Animated Introduction
                      </p>
                      <p className="text-white/60 text-xs mb-4">
                        From Technical Foundation to Business Impact
                      </p>
                      <div className="flex items-center justify-center gap-2 text-white/60 text-xs">
                        <Music className="w-4 h-4" />
                        <span>Professional Ambient Background Music</span>
                      </div>
                      <div className="mt-2 text-white/50 text-xs">
                        Click play to start with audio
                      </div>
                    </div>
                    
                    {/* Enhanced decorative elements */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-[#00FFB2] rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute top-12 right-12 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-8 left-12 w-3 h-3 bg-green-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-12 right-8 w-5 h-5 bg-purple-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Floating particles */}
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#00FFB2] rounded-full opacity-20"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-10, -30, -10],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {/* Enhanced Video Controls Overlay */}
                {hasStarted && (
                  <AnimatePresence>
                    {showControls && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center z-40"
                      >
                        <div className="flex gap-4">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="lg"
                              onClick={handlePlayPause}
                              className="bg-[#00FFB2] hover:bg-[#00E6A0] text-black rounded-full w-16 h-16 p-0 shadow-lg"
                            >
                              {isPlaying ? (
                                <Pause className="w-6 h-6" fill="currentColor" />
                              ) : (
                                <Play className="w-6 h-6 ml-1" fill="currentColor" />
                              )}
                            </Button>
                          </motion.div>
                          
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="lg"
                              onClick={handleRestart}
                              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-neutral-900 rounded-full w-16 h-16 p-0"
                            >
                              <RotateCcw className="w-6 h-6" />
                            </Button>
                          </motion.div>

                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="lg"
                              onClick={handleToggleMute}
                              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-neutral-900 rounded-full w-16 h-16 p-0"
                            >
                              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}