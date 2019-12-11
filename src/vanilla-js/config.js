var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1Ijoia3Jpc3RvZmVyb25lIiwiYSI6ImNrMHNrdGZ3dDAzcWIzYnByc2wxeXpxbHoifQ.EZ7q2p1_ggoMksNIQVbNUg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Here is an example',
    subtitle: 'A descriptive and interesting subtitle',
    byline: 'By Chris',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              center: [-75.67386, 45.42231],
              zoom: 6.98,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Another section',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [8.68529, 50.11071],
              zoom: 11.80,
              pitch: 58.50,
              bearing: 0.26
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
