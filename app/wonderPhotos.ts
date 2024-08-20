export type wonderPhotosType =
    {
        imgUrl: string,
        name: string,
        location: string,
        id: string
    }

export const photos: wonderPhotosType[] = 
[{
    id: "1",
    imgUrl: "https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg",
    location: "Rome - Italy",
    name: "Column"
},

{
    id: "2",
    imgUrl: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
    location: "San Francisco - USA",
    name: "Golden Gate"
},
{
    id: "3",
    imgUrl: "https://images.pexels.com/photos/3873663/pexels-photo-3873663.jpeg",
    location: "Ciro - Egypt",
    name: "Piramid"
},
]