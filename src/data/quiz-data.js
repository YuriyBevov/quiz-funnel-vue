const quiz = [
    {
        id: 1,
        title: 'Your Business Model',
        textCentered: true,
        isSkipBtnExist: false,
        step: 1,

        cards: [
            {
            strong: 'B2C',
            desc: ['Business to Customer'],
            nextCardId: 2,
            isDisabled: false,
            isActive: false,
            label: "business-model"
            },
            {
            strong: 'B2B',
            desc: ['Business to Business'],
            nextCardId: 3,
            isDisabled: false,
            isActive: false,
            label: "business-model"
            },
            {
            strong: ['Non-Profit'],
            desc: ['Charities'],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "business-model"
            },
        ]
    },

    {
        id: 2,
        title: 'Type of the Business',
        textCentered: true,
        isSkipBtnExist: false,
        step: 2,
        cards: [
            {
            desc: ['Provider - Service-based'],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "type-b2c"
            },

            {
            desc: ['E-commerce -Product-based'],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "type-b2c"
            },

            {
            desc: ['Edtech - Educational'],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "type-b2c"
            },

            {
            desc: ['SaaS -Software as a Service'],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "type-b2c"
            },
        ]
    },

    {
        id: 3,
        title: 'Type of the Business',
        textCentered: true,
        isSkipBtnExist: false,
        step: 2,
        cards: [
            {
            desc: ['Provider - Service-based'],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "type-b2b"
            },

            {
            desc: ['Manufacturer - Product-based'],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "type-b2b"
            },

            {
            desc: ['Distributor - i.e. Reseller'],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "type-b2b"
            },

            {
            desc: ['IT-product - SaaS or other '],
            nextCardId: 4,
            isDisabled: false,
            isActive: false,
            label: "type-b2b"
            },
        ]
    },

    {
        id: 4,
        title: 'Do you have a website?',
        textCentered: true,
        isSkipBtnExist: false,
        step: 3,
        cards: [
            {
            desc: ['Yes, I already have a website'],
            nextCardId: 5,
            isDisabled: false,
            isActive: false,
            label: "is-website-exist"
            },

            {
            desc: ['No, this business doesn’t have\xa0a\xa0site\xa0yet'],
            nextCardId: 6,
            isDisabled: false,
            isActive: false,
            label: "is-website-exist"
            },
        ]
    },

    {
        id: 5,
        title: 'And how does it perform?',
        textCentered: false,
        isSkipBtnExist: false,
        step: 4,
        cards: [
            {
                desc: [
                    'My current website have been bringing me leads, and my value proposition compares favorably with my competitors',
                    'I feel my customers deeply and understand what they desire and what they try to avoid',
                    'I’m just feeling ready to hit the next level in my business and seeking for digital/IT guidance to reach more people and create more value'
                ],
                nextCardId: 7,
                isDisabled: false,
                isActive: false,
                label: "website-perform"
            },

            {
                
                desc: ['My current website works ok, but I’m not really happy with it and don’t think I understand how to present my service/product online to entice prospects and convince them to take the next step'],
                nextCardId: 7,
                isDisabled: false,
                isActive: false,
                label: "website-perform"
            },

            {
                desc: ['My website doesn’t satisfy me at all.It should be redesigned completely'],
                nextCardId: 7,
                isDisabled: false,
                isActive: false,
                label: "website-perform"
            },
        ]
    },

    {
        id: 6,
        title: 'How would you describe your current situation?',
        textCentered: false,
        isSkipBtnExist: false,
        step: 4,
        cards: [
            {
                
                desc: [
                    'I feel my customers deeply and understand what they desire and what they try to avoid',
                    'I know how to communicate my audience and convince them, I just need someone to implement my strategy – cover visual and technical aspects - branding, web design, development, marketing automation'
                ],
                nextCardId: 7,
                isDisabled: false,
                isActive: false,
                label: "current-situation"
            },

            {
                
                desc: [
                    "I’m not sure how to position my business and how to present it online to succeed in my goals.",
                    "I know what my business does, but I don't know how to present it to an online audience and drive them to action"
                ],
                nextCardId: 7,
                isDisabled: false,
                isActive: false,
                label: "current-situation"
            },
        ]
    },

    {
        id: 7,
        title: 'Level of engagement',
        desc: 'How deeply you want to be involved in the process?',
        textCentered: false,
        isSkipBtnExist: false,
        step: 5,

        cards: [
            {
                

                desc: [
                'I’m willing to be involved intensively - create a marketing strategy , prepare a copy and colaborate on website strategy.',
                'I need someone to design the website and cover technical questions under my lead'
                ],
                nextCardId: 8,
                isDisabled: false,
                isActive: false,
                label: "engagement"
            },

            {
                

                desc: [
                'I’m OK to colaborate in design thinking process and give regular feedback on checkpoints, but I want someone to lead marketing strategy of my website according to the goals I have',
                'So I could just review and maybe adjust, rather than lead the project and manage',
                ],
                nextCardId: 8,
                isDisabled: false,
                isActive: false,
                label: "engagement"
            },

            {
                

                desc: [
                'I want someone to prepare and implement marketing and digital strategy, because I don’t have time or  expertise in digital to handle that'
                ],
                nextCardId: 8,
                isDisabled: false,
                isActive: false,
                label: "engagement"
            },
        ]
    },

    {
        id: 8,
        title: 'What is your budget for a new website?',
        desc: 'You can click the button below to skip the question, but the quiz result will be much less accurate and therefore - less valuable for you ',
        textCentered: true,
        isSkipBtnExist: true,
        step: 6,
        cards: [
            {
                
                desc: ['< $3000'],
                nextCardId: 9,
                isDisabled: false,
                isActive: false,
                label: "budget"
            },
            {
                
                desc: ['$3000 - 6000'],
                nextCardId: 9,
                isDisabled: false,
                isActive: false,
                label: "budget"
            },
            {
                
                desc: ['$6000 - 12000'],
                nextCardId: 9,
                isDisabled: false,
                isActive: false,
                label: "budget"
            },
            {
                
                desc: ['$12 000 - 25 000'],
                nextCardId: 9,
                isDisabled: false,
                isActive: false,
                label: "budget"
            },
            {
                
                desc: ['$ 25 000 - 50 000'],
                nextCardId: 9,
                isDisabled: false,
                isActive: false,
                label: "budget"
            },
            {
                
                desc: ['> $ 50 000'],
                nextCardId: 9,
                isDisabled: false,
                isActive: false,
                label: "budget"
            },
        ]
    },
]

export { quiz }