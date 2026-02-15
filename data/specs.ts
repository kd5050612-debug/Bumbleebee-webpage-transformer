export interface FeatureHighlight {
    title: string;
    description: string;
    position: 'left' | 'right';
}

export const features: FeatureHighlight[] = [
    {
        title: 'Cybertronian Engineering',
        description: 'Precision mechanical transformation powered by alien-grade metallurgy and adaptive robotics.',
        position: 'left'
    },
    {
        title: 'Autonomous Combat AI',
        description: 'Advanced combat protocols and real-time tactical adaptation systems.',
        position: 'right'
    },
    {
        title: 'High-Performance Camaro Base',
        description: 'Chevrolet Camaro platform delivering aggressive aerodynamics and muscle-car dominance.',
        position: 'left'
    },
    {
        title: 'Energon Core Reactor',
        description: 'Self-sustaining energy core enabling high-output combat and transformation cycles.',
        position: 'right'
    }
];
