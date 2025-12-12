import React, { useState, useEffect } from 'react';

const DevPortfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [skillCategory, setSkillCategory] = useState('skills');

    // Boot screen states
    const [isBooting, setIsBooting] = useState(true);
    const [bootLines, setBootLines] = useState([]);
    const [bootComplete, setBootComplete] = useState(false);

    const bootSequence = [
        { text: '> SYSTEM BOOT INITIATED', delay: 0 },
        { text: '> Loading SHIVA LASER modules...', delay: 400 },
        { text: '  [OK] Memory allocation complete', delay: 700 },
        { text: '  [OK] CPU cores initialized', delay: 900 },
        { text: '> Mounting file systems...', delay: 1200 },
        { text: '  [OK] /dev/LIGHTCYCLE mounted', delay: 1500 },
        { text: '  [OK] /usr/IDENTIFICATIONdisk loaded', delay: 1700 },
        { text: '> Initializing neural interface...', delay: 2000 },
        { text: '  [OK] Synaptic links established', delay: 2400 },
        { text: '> Starting Grid server...', delay: 2700 },
        { text: '  [OK] Resolution: MAXIMUM', delay: 3000 },
        { text: '> Authenticating user...', delay: 3300 },
        { text: '  [OK] Welcome To The Grid, User', delay: 3600 },
        { text: '', delay: 4300 },
        { text: '  End of Line', delay: 4500 },
    ];

    // Boot sequence effect
    useEffect(() => {
        if (!isBooting) return;
        bootSequence.forEach((line, index) => {
            setTimeout(() => {
                setBootLines(prev => [...prev, line.text]);
                if (index === bootSequence.length - 1) {
                    setTimeout(() => {
                        setBootComplete(true);
                        setTimeout(() => setIsBooting(false), 800);
                    }, 500);
                }
            }, line.delay);
        });
    }, []);

    const fullText = 'Building Digital Frontiers';

    // Typewriter effect - waits for boot to complete
    useEffect(() => {
        if (isBooting) return;
        if (displayText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
            }, 85);
            return () => clearTimeout(timeout);
        }
    }, [displayText, isBooting]);

    // Cursor blink effect
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    const projects = [
        {
            title: 'DeckForge',
            desc: 'A Magic: The Gathering deck management application built with Java. Demonstrates use of TreeSets, HashMaps, and Java Swing for GUI. Developed for IST 261 Complex Software Engineering at Penn State.',
            tech: ['Java', 'Swing', 'TreeSet', 'HashMap'],
            github: 'https://github.com/jjr6639/IST261Project---DeckForge',
            image: 'https://opengraph.githubassets.com/1/jjr6639/IST261Project---DeckForge'
        },
        {
            title: 'Top Notch Construction',
            desc: 'A modern, responsive construction company website with orange and space black color scheme, smooth animations, and glassmorphism effects. Features hero section, services showcase, project portfolio, and contact form.',
            tech: ['React', 'Vite', 'Tailwind CSS'],
            github: 'https://github.com/jjr6639/Top-Notch-Construction',
            image: 'https://opengraph.githubassets.com/1/jjr6639/Top-Notch-Construction'
        },
        {
            title: 'Neo Tracker',
            desc: 'React Native mobile application for trail marking and outdoor navigation with location tracking capabilities.',
            tech: ['React Native', 'Expo', 'Google Maps API'],
            github: null,
            image: null
        },
    ];

    const skillsData = {
        skills: [
            { name: 'Frontend', items: [
                    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
                ]},
            { name: 'Backend', items: [
                    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                    { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
                    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                ]},
            { name: 'DevOps', items: [
                    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
                ]},
        ],
        interpersonal: [
            { name: 'Soft Skills', items: [
                    { name: 'Communication', icon: '💬' },
                    { name: 'Teamwork', icon: '🤝' },
                    { name: 'Problem Solving', icon: '🧩' },
                    { name: 'Leadership', icon: '🎯' },
                ]},
        ],
    };

    const skillCategories = [
        { id: 'skills', label: 'Skills' },
        { id: 'interpersonal', label: 'Interpersonal' },
    ];

    const neonGreen = '#00ff41';
    const neonGreenDark = '#00cc33';

    return (
        <>
            {/* Boot Screen - Futuristic Glassmorphic */}
            {isBooting && (
                <div
                    className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
                        bootComplete ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ fontFamily: 'monospace' }}
                >
                    {/* Simple space black background */}
                    <div className="absolute inset-0 bg-black" />

                    {/* Glassmorphic terminal container */}
                    <div
                        className="relative mx-4 sm:mx-8 max-w-3xl w-full p-6 sm:p-10"
                        style={{
                            background: 'linear-gradient(135deg, rgba(9, 9, 11, 0.95) 0%, rgba(9, 9, 11, 0.85) 100%)',
                            backdropFilter: 'blur(20px)',
                            border: `1px solid rgba(0, 255, 65, 0.3)`,
                            clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
                            boxShadow: '0 0 60px rgba(0, 255, 65, 0.15), inset 0 0 60px rgba(0, 255, 65, 0.05)',
                        }}
                    >
                        {/* Glowing border effect */}
                        <div
                            className="absolute inset-0 opacity-60"
                            style={{
                                background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.15) 0%, transparent 50%, rgba(0, 255, 65, 0.1) 100%)',
                                clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
                            }}
                        />

                        {/* Header bar */}
                        <div className="relative flex items-center justify-between mb-6 pb-4" style={{ borderBottom: '1px solid rgba(0, 255, 65, 0.3)' }}>
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full" style={{ background: neonGreen, boxShadow: `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}` }} />
                                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(0, 255, 65, 0.4)' }} />
                                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(0, 255, 65, 0.2)' }} />
                                </div>
                                <span className="text-xs tracking-widest" style={{ color: neonGreen, opacity: 0.8 }}>NEURAL_INTERFACE.exe</span>
                            </div>
                            <div className="text-xs" style={{ color: 'rgba(0, 255, 65, 0.5)' }}>v2.0.25</div>
                        </div>

                        {/* System status indicators */}
                        <div className="relative flex gap-4 mb-6 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: neonGreen, boxShadow: `0 0 8px ${neonGreen}, 0 0 16px ${neonGreen}`, animation: 'nodeGlow 2s ease-in-out infinite' }} />
                                <span style={{ color: 'rgba(0, 255, 65, 0.6)' }}>SYSTEM ACTIVE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(0, 255, 65, 0.6)' }} />
                                <span style={{ color: 'rgba(0, 255, 65, 0.6)' }}>SECURE CONNECTION</span>
                            </div>
                        </div>

                        {/* Boot lines with typewriter effect */}
                        <div className="relative space-y-1.5 min-h-[280px]">
                            {bootLines.map((line, index) => (
                                <div
                                    key={index}
                                    className="text-sm sm:text-base font-mono"
                                    style={{
                                        color: line.includes('[OK]')
                                            ? neonGreen
                                            : line.includes('SYSTEM READY')
                                                ? neonGreen
                                                : line.includes('>')
                                                    ? 'rgba(0, 255, 65, 0.9)'
                                                    : 'rgba(0, 255, 65, 0.7)',
                                        textShadow: line.includes('SYSTEM READY')
                                            ? `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}, 0 0 40px ${neonGreen}`
                                            : line.includes('[OK]')
                                                ? `0 0 10px ${neonGreen}`
                                                : '0 0 5px rgba(0, 255, 65, 0.5)',
                                        fontWeight: line.includes('SYSTEM READY') ? 'bold' : 'normal',
                                    }}
                                >
                                    {line}
                                </div>
                            ))}

                            {/* Blinking cursor */}
                            {!bootComplete && (
                                <span
                                    className="inline-block w-3 h-5 ml-1"
                                    style={{
                                        background: neonGreen,
                                        boxShadow: `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}`,
                                        animation: 'blink 0.7s step-end infinite',
                                    }}
                                />
                            )}
                        </div>

                        {/* Bottom status bar */}
                        <div className="relative flex items-center justify-between mt-6 pt-4 text-xs" style={{ borderTop: '1px solid rgba(0, 255, 65, 0.3)', color: 'rgba(0, 255, 65, 0.4)' }}>
                            <div className="flex gap-4">
                                <span>MEM: 16384MB</span>
                                <span>CPU: 8 CORES</span>
                                <span>GPU: ENABLED</span>
                            </div>
                            <div className="font-mono">{new Date().toISOString().slice(0, 19)}</div>
                        </div>
                    </div>

                </div>
            )}

            {/* Main Content */}
            <div className={`min-h-screen bg-black text-zinc-100 overflow-x-hidden transition-opacity duration-500 font-mono ${isBooting ? 'opacity-0' : 'opacity-100'}`}>
                {/* Animated Glassmorphic Background */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    {/* Pure black base */}
                    <div className="absolute inset-0 bg-black" />

                    {/* Animated glassmorphic blobs */}
                    <div
                        className="absolute w-[500px] h-[500px]"
                        style={{
                            top: '10%',
                            left: '5%',
                            background: 'radial-gradient(circle, rgba(0,255,65,0.08) 0%, rgba(0,255,65,0.02) 40%, transparent 70%)',
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                            filter: 'blur(40px)',
                            animation: 'blob1 20s ease-in-out infinite',
                        }}
                    />
                    <div
                        className="absolute w-[600px] h-[600px]"
                        style={{
                            top: '50%',
                            right: '0%',
                            background: 'radial-gradient(circle, rgba(0,255,65,0.06) 0%, rgba(0,255,65,0.02) 40%, transparent 70%)',
                            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                            filter: 'blur(50px)',
                            animation: 'blob2 25s ease-in-out infinite',
                        }}
                    />
                    <div
                        className="absolute w-[400px] h-[400px]"
                        style={{
                            bottom: '10%',
                            left: '20%',
                            background: 'radial-gradient(circle, rgba(0,255,65,0.07) 0%, rgba(0,255,65,0.02) 40%, transparent 70%)',
                            borderRadius: '50% 50% 30% 70% / 40% 60% 40% 60%',
                            filter: 'blur(45px)',
                            animation: 'blob3 22s ease-in-out infinite',
                        }}
                    />

                    {/* Floating glass panels */}
                    <div
                        className="absolute w-[300px] h-[200px]"
                        style={{
                            top: '15%',
                            right: '15%',
                            background: 'linear-gradient(135deg, rgba(0,255,65,0.03) 0%, rgba(0,255,65,0.01) 100%)',
                            border: '1px solid rgba(0,255,65,0.05)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            animation: 'floatPanel1 15s ease-in-out infinite',
                        }}
                    />
                    <div
                        className="absolute w-[250px] h-[150px]"
                        style={{
                            bottom: '25%',
                            left: '10%',
                            background: 'linear-gradient(225deg, rgba(0,255,65,0.02) 0%, rgba(0,255,65,0.01) 100%)',
                            border: '1px solid rgba(0,255,65,0.04)',
                            borderRadius: '16px',
                            backdropFilter: 'blur(8px)',
                            animation: 'floatPanel2 18s ease-in-out infinite',
                        }}
                    />
                    <div
                        className="absolute w-[180px] h-[180px]"
                        style={{
                            top: '60%',
                            right: '25%',
                            background: 'linear-gradient(180deg, rgba(0,255,65,0.025) 0%, transparent 100%)',
                            border: '1px solid rgba(0,255,65,0.03)',
                            borderRadius: '50%',
                            backdropFilter: 'blur(6px)',
                            animation: 'floatPanel3 20s ease-in-out infinite',
                        }}
                    />

                    {/* Subtle moving light streak */}
                    <div
                        className="absolute h-[1px] w-[200px]"
                        style={{
                            background: `linear-gradient(90deg, transparent, rgba(0,255,65,0.3), transparent)`,
                            filter: 'blur(1px)',
                            animation: 'lightStreak 12s linear infinite',
                        }}
                    />

                    {/* Soft vignette */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
                        }}
                    />
                </div>

                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
                    <div className="max-w-7xl mx-auto">
                        <div
                            className="relative bg-zinc-900/40 border border-zinc-700/30 overflow-hidden"
                            style={{
                                backdropFilter: 'blur(20px)',
                                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                boxShadow: '0 0 30px rgba(0, 255, 65, 0.1)',
                            }}
                        >
                            {/* Gradient border effect */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: `linear-gradient(90deg, rgba(0,255,65,0.2), transparent, rgba(0,255,65,0.2))`,
                                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                }}
                            />
                            <div
                                className="absolute inset-0.5 bg-zinc-900/80"
                                style={{
                                    clipPath: 'polygon(0 0, calc(100% - 19px) 0, 100% 19px, 100% 100%, 19px 100%, 0 calc(100% - 19px))',
                                }}
                            />

                            <div className="relative px-4 sm:px-6 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 flex items-center justify-center font-bold text-zinc-950"
                                        style={{
                                            background: `linear-gradient(135deg, ${neonGreen}, ${neonGreenDark})`,
                                            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
                                            boxShadow: `0 0 20px rgba(0, 255, 65, 0.4)`,
                                        }}
                                    >
                                        JR
                                    </div>
                                    <div className="hidden sm:block">
                                        <div className="text-sm font-semibold tracking-wider text-zinc-100">JORDAN RUNYON</div>
                                        <div className="text-xs tracking-widest" style={{ color: neonGreen, opacity: 0.8 }}>DEVELOPER</div>
                                    </div>
                                </div>

                                <div className="hidden md:flex items-center gap-1">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className="relative px-4 py-2 text-sm tracking-wide transition-all duration-300 group"
                                            style={{ color: activeSection === item.id ? neonGreen : '#a1a1aa' }}
                                        >
                                            <span className="relative z-10">{item.label}</span>
                                            {activeSection === item.id && (
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        background: 'rgba(0, 255, 65, 0.1)',
                                                        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                                                    }}
                                                />
                                            )}
                                            <div
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                                                style={{
                                                    background: `linear-gradient(90deg, ${neonGreen}, ${neonGreenDark})`,
                                                    boxShadow: `0 0 10px ${neonGreen}`,
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>

                                <div className="hidden md:block">
                                    <button
                                        className="px-6 py-2.5 font-semibold text-sm tracking-wide text-zinc-950"
                                        style={{
                                            background: `linear-gradient(135deg, ${neonGreen}, ${neonGreenDark})`,
                                            boxShadow: `0 0 20px rgba(0, 255, 65, 0.4)`,
                                            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                                        }}
                                    >
                                        Hire Me
                                    </button>
                                </div>

                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="md:hidden relative w-10 h-10 flex items-center justify-center"
                                    aria-label="Toggle menu"
                                >
                                    <div className="relative w-6 h-5 flex flex-col justify-between">
                    <span
                        className={`block h-0.5 transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
                        style={{ background: `linear-gradient(90deg, ${neonGreen}, ${neonGreenDark})`, boxShadow: `0 0 5px ${neonGreen}` }}
                    />
                                        <span className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                                        <span
                                            className={`block h-0.5 transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
                                            style={{ background: `linear-gradient(90deg, ${neonGreenDark}, ${neonGreen})`, boxShadow: `0 0 5px ${neonGreen}` }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden absolute top-full left-0 right-0 px-4 sm:px-6 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                        <div className="max-w-7xl mx-auto mt-2">
                            <div
                                className="bg-black/90 border border-zinc-700/30 overflow-hidden"
                                style={{
                                    backdropFilter: 'blur(20px)',
                                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
                                    boxShadow: '0 0 30px rgba(0, 255, 65, 0.1)',
                                }}
                            >
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setActiveSection(item.id); setIsMenuOpen(false); }}
                                        className="w-full px-6 py-4 text-left text-sm tracking-wide transition-all duration-300 border-b border-zinc-800/50 last:border-0 flex items-center gap-3"
                                        style={{
                                            background: activeSection === item.id ? 'rgba(0, 255, 65, 0.1)' : 'transparent',
                                            color: activeSection === item.id ? neonGreen : '#a1a1aa',
                                        }}
                                    >
                    <span
                        className="w-2 h-2"
                        style={{
                            background: activeSection === item.id ? neonGreen : '#52525b',
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                            boxShadow: activeSection === item.id ? `0 0 10px ${neonGreen}` : 'none',
                        }}
                    />
                                        {item.label}
                                    </button>
                                ))}
                                <div className="p-4">
                                    <button
                                        className="w-full py-3 font-semibold text-sm text-zinc-950"
                                        style={{
                                            background: `linear-gradient(135deg, ${neonGreen}, ${neonGreenDark})`,
                                            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                                            boxShadow: `0 0 20px rgba(0, 255, 65, 0.3)`,
                                        }}
                                    >
                                        Hire Me
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div
                            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 text-xs tracking-widest"
                            style={{
                                color: neonGreen,
                                clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                            }}
                        >
              <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: neonGreen, boxShadow: `0 0 10px ${neonGreen}` }}
              />
                            AVAILABLE FOR WORK
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            {displayText.split(' ').map((word, wordIndex) => (
                                <React.Fragment key={wordIndex}>
                                    {wordIndex > 0 && ' '}
                                    {word === 'Digital' ? (
                                        <span style={{ color: neonGreen, textShadow: `0 0 30px rgba(0, 255, 65, 0.5)` }}>{word}</span>
                                    ) : (
                                        <span className="text-zinc-100">{word}</span>
                                    )}
                                </React.Fragment>
                            ))}
                            <span
                                className={`inline-block w-1 h-12 ml-1 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    background: `linear-gradient(to bottom, ${neonGreen}, ${neonGreenDark})`,
                                    boxShadow: `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}`,
                                }}
                            />
                        </h1>

                        <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Full-stack developer building user friendly, scalable applications with modern technologies and clean architecture.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                className="px-8 py-4 font-semibold tracking-wide text-zinc-950"
                                style={{
                                    background: `linear-gradient(135deg, ${neonGreen}, ${neonGreenDark})`,
                                    clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
                                    boxShadow: `0 0 30px rgba(0, 255, 65, 0.4), 0 0 60px rgba(0, 255, 65, 0.2)`,
                                }}
                            >
                                View Projects
                            </button>
                            <button
                                className="px-8 py-4 border border-zinc-600 text-zinc-300 font-medium tracking-wide transition-all duration-300 hover:border-emerald-500/50 hover:text-emerald-400"
                                style={{
                                    clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
                                }}
                            >
                                Download CV
                            </button>
                        </div>
                    </div>
                </section>

                {/* About Me Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                <span className="text-zinc-100">About </span>
                                <span style={{ color: neonGreen }}>Me</span>
                            </h2>
                            <p className="text-zinc-400 max-w-xl mx-auto">Get to know who I am and what drives my passion for technology.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Education Card */}
                            <div
                                className="relative p-8 bg-zinc-900/50 border border-zinc-800/50 transition-all duration-500 hover:border-emerald-500/30"
                                style={{
                                    backdropFilter: 'blur(10px)',
                                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
                                }}
                            >
                                <div
                                    className="absolute top-0 right-0 w-16 h-16"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(0, 255, 65, 0.15), rgba(0, 204, 51, 0.1))`,
                                        clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                                    }}
                                />
                                <div className="relative">
                                    <div
                                        className="w-12 h-12 mb-6 flex items-center justify-center border border-zinc-700/50"
                                        style={{
                                            background: 'rgba(0, 255, 65, 0.1)',
                                            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
                                        }}
                                    >
                                        <span style={{ color: neonGreen, fontSize: '20px' }}>🎓</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">Education</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-lg font-medium" style={{ color: neonGreen }}>Bachelor of Science</p>
                                            <p className="text-zinc-300">Information Sciences and Technology</p>
                                            <p className="text-zinc-400 text-sm">Design and Development Track</p>
                                        </div>
                                        <div className="flex items-center gap-3 pt-2">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1200px-Penn_State_Nittany_Lions_logo.svg.png"
                                                alt="Penn State"
                                                className="w-10 h-10 object-contain"
                                                style={{ filter: 'brightness(0) invert(1)' }}
                                            />
                                            <div>
                                                <p className="text-zinc-200 font-medium">Penn State University</p>
                                                <p className="text-zinc-500 text-sm">University Park, PA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Card */}
                            <div
                                className="relative p-8 bg-zinc-900/50 border border-zinc-800/50 transition-all duration-500 hover:border-emerald-500/30"
                                style={{
                                    backdropFilter: 'blur(10px)',
                                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
                                }}
                            >
                                <div
                                    className="absolute top-0 right-0 w-16 h-16"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(0, 255, 65, 0.15), rgba(0, 204, 51, 0.1))`,
                                        clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                                    }}
                                />
                                <div className="relative">
                                    <div
                                        className="w-12 h-12 mb-6 flex items-center justify-center border border-zinc-700/50"
                                        style={{
                                            background: 'rgba(0, 255, 65, 0.1)',
                                            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
                                        }}
                                    >
                                        <span style={{ color: neonGreen, fontSize: '20px' }}>📊</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-zinc-100 mb-4">Current Status</h3>
                                    <div className="space-y-4">
                                        <div
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50"
                                            style={{
                                                clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                                            }}
                                        >
                      <span
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ background: neonGreen, boxShadow: `0 0 10px ${neonGreen}` }}
                      />
                                            <span className="text-sm font-medium" style={{ color: neonGreen }}>SENIOR</span>
                                        </div>
                                        <p className="text-zinc-400">
                                            Currently in my final year, focusing on software development, user experience design, and building real-world applications.
                                        </p>
                                        <div className="pt-2">
                                            <p className="text-zinc-500 text-sm mb-2">Expected Graduation</p>
                                            <p className="text-zinc-200 font-medium">Spring 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                <span className="text-zinc-100">Work </span>
                                <span style={{ color: neonGreen }}>Experience</span>
                            </h2>
                            <p className="text-zinc-400 max-w-xl mx-auto">My professional journey and career milestones.</p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Timeline line */}
                            <div
                                className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2"
                                style={{
                                    background: `linear-gradient(to bottom, transparent, rgba(0,255,65,0.3) 10%, rgba(0,255,65,0.3) 90%, transparent)`,
                                }}
                            />

                            {/* Empty State */}
                            <div className="relative pl-8 md:pl-0 md:w-full">
                                <div className="md:flex md:justify-center">
                                    <div
                                        className="relative p-8 bg-zinc-900/50 border border-zinc-800/50 md:w-2/3"
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
                                        }}
                                    >
                                        {/* Timeline dot */}
                                        <div
                                            className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-[calc(100%+23px)] md:-translate-x-1/2 w-4 h-4 rounded-full border-2"
                                            style={{
                                                borderColor: neonGreen,
                                                background: 'black',
                                                boxShadow: `0 0 15px rgba(0,255,65,0.5)`,
                                            }}
                                        />

                                        <div className="text-center">
                                            <div
                                                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-zinc-700/50"
                                                style={{
                                                    background: 'rgba(0, 255, 65, 0.05)',
                                                }}
                                            >
                                                <span style={{ color: neonGreen, fontSize: '28px' }}>🚀</span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-zinc-100 mb-2">Ready for New Opportunities</h3>
                                            <p className="text-zinc-400 mb-4">
                                                No professional or intern experience to show yet. Currently seeking opportunities to apply my skills and grow as a developer.
                                            </p>
                                            <div
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm"
                                                style={{
                                                    background: 'rgba(0, 255, 65, 0.1)',
                                                    border: '1px solid rgba(0, 255, 65, 0.2)',
                                                    color: neonGreen,
                                                    clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
                                                }}
                                            >
                                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: neonGreen }} />
                                                Open to Internships & Entry-Level Positions
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Placeholder Timeline Items */}
                            <div className="mt-12 space-y-12">
                                {/* Future Position 1 */}
                                <div className="relative pl-8 md:pl-0 md:flex md:justify-start">
                                    <div className="md:w-1/2 md:pr-12">
                                        <div
                                            className="relative p-6 bg-zinc-900/30 border border-dashed border-zinc-700/50 transition-all duration-300"
                                            style={{
                                                backdropFilter: 'blur(5px)',
                                                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
                                            }}
                                        >
                                            {/* Timeline dot */}
                                            <div
                                                className="absolute left-0 md:left-auto md:right-0 top-6 -translate-x-[calc(100%+23px)] md:translate-x-[calc(100%+23px)] w-3 h-3 rounded-full"
                                                style={{
                                                    background: 'rgba(0,255,65,0.3)',
                                                    border: '2px solid rgba(0,255,65,0.5)',
                                                }}
                                            />

                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <p className="text-zinc-500 text-sm">MM/YYYY - Present</p>
                                                    <h4 className="text-lg font-semibold text-zinc-400">Future Role</h4>
                                                </div>
                                                <span className="text-zinc-600 text-xs px-2 py-1 border border-zinc-700/50 rounded">Placeholder</span>
                                            </div>
                                            <p className="text-zinc-600 text-sm mb-3">Company Name • Location</p>
                                            <p className="text-zinc-500 text-sm">Your future experience and accomplishments will be displayed here.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Future Position 2 */}
                                <div className="relative pl-8 md:pl-0 md:flex md:justify-end">
                                    <div className="md:w-1/2 md:pl-12">
                                        <div
                                            className="relative p-6 bg-zinc-900/30 border border-dashed border-zinc-700/50 transition-all duration-300"
                                            style={{
                                                backdropFilter: 'blur(5px)',
                                                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
                                            }}
                                        >
                                            {/* Timeline dot */}
                                            <div
                                                className="absolute left-0 md:left-0 top-6 -translate-x-[calc(100%+23px)] md:-translate-x-[calc(100%+11px)] w-3 h-3 rounded-full"
                                                style={{
                                                    background: 'rgba(0,255,65,0.3)',
                                                    border: '2px solid rgba(0,255,65,0.5)',
                                                }}
                                            />

                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <p className="text-zinc-500 text-sm">MM/YYYY - MM/YYYY</p>
                                                    <h4 className="text-lg font-semibold text-zinc-400">Future Internship</h4>
                                                </div>
                                                <span className="text-zinc-600 text-xs px-2 py-1 border border-zinc-700/50 rounded">Placeholder</span>
                                            </div>
                                            <p className="text-zinc-600 text-sm mb-3">Company Name • Location</p>
                                            <p className="text-zinc-500 text-sm">Your future internship experience will be showcased here.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                <span className="text-zinc-100">Featured </span>
                                <span style={{ color: neonGreen }}>Projects</span>
                            </h2>
                            <p className="text-zinc-400 max-w-xl mx-auto">A selection of recent work spanning web applications, APIs, and developer tools.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-zinc-900/50 border border-zinc-800/50 transition-all duration-500 hover:border-emerald-500/30 overflow-hidden"
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
                                    }}
                                >
                                    {/* Preview Image */}
                                    {project.image && (
                                        <div className="relative w-full h-40 overflow-hidden border-b border-zinc-800/50">
                                            <img
                                                src={project.image}
                                                alt={`${project.title} preview`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                style={{ filter: 'brightness(0.8)' }}
                                            />
                                            <div
                                                className="absolute inset-0"
                                                style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.9) 0%, transparent 50%)' }}
                                            />
                                        </div>
                                    )}

                                    {/* No image placeholder */}
                                    {!project.image && (
                                        <div className="relative w-full h-40 overflow-hidden border-b border-zinc-800/50 flex items-center justify-center" style={{ background: 'rgba(0,255,65,0.03)' }}>
                                            <span style={{ color: 'rgba(0,255,65,0.3)', fontSize: '3rem' }}>{'</>'}</span>
                                        </div>
                                    )}

                                    <div
                                        className="absolute top-0 right-0 w-12 h-12 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-30"
                                        style={{
                                            background: `linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 204, 51, 0.2))`,
                                            clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                                        }}
                                    />
                                    <div className="relative p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <div
                                                className="w-10 h-10 flex items-center justify-center border border-zinc-700/50"
                                                style={{
                                                    background: 'rgba(0, 255, 65, 0.1)',
                                                    color: neonGreen,
                                                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-3 py-1.5 text-xs border border-zinc-700/50 hover:border-emerald-500/50 transition-all duration-300"
                                                    style={{ color: 'rgba(0,255,65,0.7)' }}
                                                    onMouseEnter={(e) => e.currentTarget.style.color = '#00ff41'}
                                                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,255,65,0.7)'}
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                    GitHub
                                                </a>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-semibold text-zinc-100 mb-2">{project.title}</h3>
                                        <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                                                >
                          {t}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                                <span className="text-zinc-100">My </span>
                                <span style={{ color: neonGreen }}>Expertise</span>
                            </h2>

                            {/* Tab Buttons */}
                            <div
                                className="inline-flex relative p-1 bg-zinc-900/80 border border-zinc-800/50"
                                style={{
                                    backdropFilter: 'blur(10px)',
                                    clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
                                }}
                            >
                                {skillCategories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSkillCategory(cat.id)}
                                        className="relative px-6 sm:px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 z-10"
                                        style={{ color: skillCategory === cat.id ? '#09090b' : '#a1a1aa' }}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                                {/* Sliding indicator */}
                                <div
                                    className="absolute top-1 bottom-1 transition-all duration-300 ease-out"
                                    style={{
                                        left: `calc(${skillCategories.findIndex(c => c.id === skillCategory) * (100 / skillCategories.length)}% + 4px)`,
                                        width: `calc(${100 / skillCategories.length}% - 8px)`,
                                        background: `linear-gradient(135deg, ${neonGreen}, ${neonGreenDark})`,
                                        clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
                                        boxShadow: `0 0 20px rgba(0, 255, 65, 0.6)`,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Skills Content */}
                        <div className="mt-12">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                                {skillsData[skillCategory].map((category, index) => (
                                    <div
                                        key={`${skillCategory}-${index}`}
                                        className="text-center w-full max-w-sm p-6 bg-zinc-900/30 border border-zinc-800/50 transition-all duration-500 hover:border-emerald-500/30"
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            clipPath: 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)',
                                        }}
                                    >
                                        <div
                                            className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 rounded-full"
                                            style={{ boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)' }}
                                        >
                                            <span className="text-sm font-bold" style={{ color: neonGreen }}>{category.name.slice(0, 2).toUpperCase()}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-zinc-100 mb-4">{category.name}</h3>
                                        <div className="flex flex-wrap justify-center gap-3">
                                            {category.items.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex flex-col items-center gap-2 p-3 bg-zinc-800/50 border border-zinc-700/30 hover:border-emerald-500/50 transition-all duration-300 cursor-default group rounded-lg"
                                                    style={{ minWidth: '70px' }}
                                                >
                                                    {item.icon.startsWith('http') ? (
                                                        <img
                                                            src={item.icon}
                                                            alt={item.name}
                                                            className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                                                            style={{ filter: 'drop-shadow(0 0 5px rgba(0,255,65,0.2))' }}
                                                        />
                                                    ) : (
                                                        <span className="text-2xl">{item.icon}</span>
                                                    )}
                                                    <span className="text-xs text-zinc-400 group-hover:text-emerald-400 transition-colors">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            <span className="text-zinc-100">Let's </span>
                            <span style={{ color: neonGreen }}>Connect</span>
                        </h2>
                        <p className="text-zinc-400 mb-8">Have a project in mind? Let's build something exceptional together.</p>

                        <div
                            className="p-8 bg-zinc-900/50 border border-zinc-800/50"
                            style={{
                                backdropFilter: 'blur(20px)',
                                clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
                            }}
                        >
                            <div className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                                    style={{ clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)' }}
                                />
                                <textarea
                                    placeholder="Your message..."
                                    rows={4}
                                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                                    style={{ clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)' }}
                                />
                                <button
                                    className="w-full py-4 font-semibold tracking-wide text-zinc-950 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20"
                                    style={{
                                        background: `linear-gradient(135deg, ${neonGreen}, ${neonGreenDark})`,
                                        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                                        boxShadow: `0 0 20px rgba(0, 255, 65, 0.3)`,
                                    }}
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative z-10 py-16 px-4 border-t border-zinc-800/50">
                    <div className="max-w-6xl mx-auto">
                        {/* Polygonal Footer Design */}
                        <div className="relative">
                            {/* Main polygonal container */}
                            <div
                                className="relative p-8 bg-zinc-900/40"
                                style={{
                                    clipPath: 'polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))',
                                    border: '1px solid rgba(0,255,65,0.2)',
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: '2px solid #00ff41', borderLeft: '2px solid #00ff41' }} />
                                <div className="absolute top-0 right-0 w-8 h-8" style={{ borderTop: '2px solid #00ff41', borderRight: '2px solid #00ff41' }} />
                                <div className="absolute bottom-0 left-0 w-8 h-8" style={{ borderBottom: '2px solid #00ff41', borderLeft: '2px solid #00ff41' }} />
                                <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: '2px solid #00ff41', borderRight: '2px solid #00ff41' }} />

                                {/* Content grid */}
                                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                                    {/* Logo/Brand */}
                                    <div className="flex flex-col items-center md:items-start gap-3">
                                        <div
                                            className="flex items-center justify-center w-12 h-12 text-xl font-bold"
                                            style={{
                                                color: '#00ff41',
                                                border: '2px solid #00ff41',
                                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                                textShadow: '0 0 10px rgba(0,255,65,0.5)',
                                            }}
                                        >
                                            JR
                                        </div>
                                        <p className="text-sm" style={{ color: 'rgba(0,255,65,0.6)' }}>
                                            &lt;/&gt; Full Stack Developer
                                        </p>
                                    </div>

                                    {/* Quick Links */}
                                    <div className="flex flex-col items-center gap-3">
                                        <p className="text-xs tracking-widest uppercase" style={{ color: '#00ff41' }}>Navigation</p>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                                                <a
                                                    key={link}
                                                    href={`#${link.toLowerCase()}`}
                                                    className="text-sm transition-all duration-300 hover:translate-x-1"
                                                    style={{ color: 'rgba(0,255,65,0.5)' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#00ff41'}
                                                    onMouseLeave={(e) => e.target.style.color = 'rgba(0,255,65,0.5)'}
                                                >
                                                    [{link}]
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex flex-col items-center md:items-end gap-3">
                                        <p className="text-xs tracking-widest uppercase" style={{ color: '#00ff41' }}>Connect</p>
                                        <div className="flex gap-4">
                                            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                                                <a
                                                    key={social}
                                                    href="#"
                                                    className="text-sm transition-all duration-300"
                                                    style={{ color: 'rgba(0,255,65,0.5)' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#00ff41'}
                                                    onMouseLeave={(e) => e.target.style.color = 'rgba(0,255,65,0.5)'}
                                                >
                                                    {social}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Divider with circuit pattern */}
                                <div className="relative my-8">
                                    <div className="w-full h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #00ff41, transparent)' }} />
                                    <div
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3"
                                        style={{
                                            background: '#00ff41',
                                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                                            boxShadow: '0 0 10px #00ff41',
                                        }}
                                    />
                                </div>

                                {/* Bottom bar */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <p className="text-xs" style={{ color: 'rgba(0,255,65,0.4)' }}>
                                        © 2025 // ALL RIGHTS RESERVED
                                    </p>
                                    <p className="text-xs" style={{ color: 'rgba(0,255,65,0.6)' }}>
                                        {'>'} POWERED WITH <span style={{ color: '#00ff41' }}>React</span> + <span style={{ color: '#00ff41' }}>Tailwind</span>
                                    </p>
                                </div>
                            </div>

                            {/* Decorative side lines */}
                            <div
                                className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-24"
                                style={{
                                    background: 'linear-gradient(to bottom, transparent, #00ff41, transparent)',
                                    opacity: 0.3,
                                }}
                            />
                            <div
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-24"
                                style={{
                                    background: 'linear-gradient(to bottom, transparent, #00ff41, transparent)',
                                    opacity: 0.3,
                                }}
                            />
                        </div>
                    </div>
                </footer>

                <style>{`
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scanLine {
            0% { top: -2px; }
            100% { top: 100%; }
          }
          @keyframes nodeGlow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes blob1 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
              border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            }
            25% { 
              transform: translate(50px, -30px) scale(1.1);
              border-radius: 50% 50% 30% 70% / 50% 70% 30% 50%;
            }
            50% { 
              transform: translate(20px, 40px) scale(0.95);
              border-radius: 70% 30% 50% 50% / 30% 50% 50% 70%;
            }
            75% { 
              transform: translate(-30px, 20px) scale(1.05);
              border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
            }
          }
          @keyframes blob2 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            25% { 
              transform: translate(-40px, 30px) scale(1.05);
              border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%;
            }
            50% { 
              transform: translate(-60px, -20px) scale(1.1);
              border-radius: 30% 70% 40% 60% / 70% 40% 60% 30%;
            }
            75% { 
              transform: translate(20px, -40px) scale(0.95);
              border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            }
          }
          @keyframes blob3 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
              border-radius: 50% 50% 30% 70% / 40% 60% 40% 60%;
            }
            33% { 
              transform: translate(40px, -50px) scale(1.08);
              border-radius: 70% 30% 50% 50% / 50% 50% 50% 50%;
            }
            66% { 
              transform: translate(-30px, -20px) scale(0.92);
              border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%;
            }
          }
          @keyframes floatPanel1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
            50% { transform: translate(-20px, 30px) rotate(2deg); opacity: 0.7; }
          }
          @keyframes floatPanel2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
            50% { transform: translate(30px, -20px) rotate(-2deg); opacity: 0.6; }
          }
          @keyframes floatPanel3 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
            50% { transform: translate(15px, 25px) scale(1.1); opacity: 0.5; }
          }
          @keyframes lightStreak {
            0% { top: -10%; left: -20%; opacity: 0; transform: rotate(45deg); }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 110%; left: 120%; opacity: 0; transform: rotate(45deg); }
          }
        `}</style>
            </div>
        </>
    );
};

export default DevPortfolio;