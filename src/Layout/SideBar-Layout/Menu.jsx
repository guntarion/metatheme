import { HomeSvg, SamplePageSvg } from '../../Data/svgIcons';

export const MENUITEMS = [
    {
        menutitle: 'Sample Page',
        Items: [
            {
                title: 'Sample Page', icon: HomeSvg, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/sample-page`, icon: SamplePageSvg, title: 'Sample Page', type: 'link' }
                ]
            },
        ]
    },
    {
        menutitle: 'Support',
        Items: [
            {
                title: 'Raised ticket', icon: HomeSvg, type: 'sub', active: false, children: [
                    { path: 'http://support.pixelstrap.com/help-center', icon: SamplePageSvg, title: 'Raised ticket', type: 'exteral_link' }
                ]
            },
        ]
    },
];
