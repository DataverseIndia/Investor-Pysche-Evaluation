interface Step {
    id: number;
    url: string;
    imageUrl: string;
    heading: string;
    content: string;
}

export const Steps: Step[] = [
    {
        id: 1,
        url: "/step-1",
        imageUrl: '/images/step1.jpg',
        heading: 'Proficiency Levels?',
        content:
            "We begin by assessing the proficiency levels of traders and investors. This step categorizes individuals into different levels of expertise. For instance, Level 4 signifies mastery, where an individual is capable of coaching and guiding others. This initial assessment helps in identifying the current skill set and knowledge base, ensuring that our guidance is tailored to the specific needs of each client.",
    },
    {
        id: 2,
        url: '/step-2',
        imageUrl: '/images/step2.jpg',
        heading: 'Competency Score Gap Analysis',
        content:
            "In the second step, we conduct a detailed analysis of competency scores to identify areas for improvement. By examining various competencies, we pinpoint the gaps that need to be addressed. This analysis is crucial for personal and professional growth, enabling traders to understand investor skills and make more informed investment decisions. The competency score gap analysis provides a clear roadmap for continuous improvement and development.",
    },
    {
        id: 3,
        url: "/emotional-factors",
        imageUrl: '/images/step3.jpg',
        heading: 'Building Investor-Trader Bonds',
        content:
            'The third step focuses on the relationship between traders and investors. We analyze the potential bonds that can be formed based on seven critical parameters, which include aspects like relationship building, result orientation, influence, and more. Understanding these dynamics helps traders foster stronger, more trustful connections with investors. Effective relationship management is essential for long-term success in trading, and this step ensures that traders are equipped to build and maintain robust investor relationships.',
    },
    {
        id: 4,
        url: "/step-4",
        imageUrl: '/images/step4.jpg',
        heading: 'Building Investor-Trader Bonds',
        content:
            'In the final step, we classify investors into different types based on various parameters. This classification allows traders to tailor their strategies according to the specific characteristics and preferences of each investor type. By understanding the unique traits and behaviors of different investors, traders can better align their approaches to meet investor expectations and achieve mutually beneficial outcomes.',
    },
];
