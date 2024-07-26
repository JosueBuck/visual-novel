namespace Template {

    export type Transitions = {
        [key: string]: {
            duration: number;
            alpha: RequestInfo;
            edge: number;
        };
    }

    export let transitions: Transitions = {
        pix1: {
            duration: 1,
            alpha: "Transitions/pix1.jpg",
            edge: 1
        },
        pix2: {
            duration: 1,
            alpha: "Transitions/pix2.png",
            edge: 2
        },
        pix3: {
            duration: 1,
            alpha: "Transitions/pix3.png",
            edge: 3
        },
        pix4: {
            duration: 1,
            alpha: "Transitions/pix4.png",
            edge: 4
        },
    }
}