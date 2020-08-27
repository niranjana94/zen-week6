    export interface Share {
        subject: string;
        text: string;
        href: string;
        image: string;
        twitter: string;
        html: string;
        avatar: string;
        snapchat: string;
    }

    export interface Images {
        background: string;
        coverart: string;
        coverarthq: string;
    }

    export interface Action {
        name: string;
        type: string;
        id: string;
        uri: string;
    }

    export interface Action2 {
        name: string;
        type: string;
        uri: string;
    }

    export interface Beacondata {
        type: string;
        providername: string;
    }

    export interface Option {
        caption: string;
        actions: Action2[];
        beacondata: Beacondata;
        image: string;
        listcaption: string;
        overflowimage: string;
        colouroverflowimage: boolean;
    }

    export interface Images2 {
        overflow: string;
        default: string;
    }

    export interface Action3 {
        name: string;
        type: string;
        uri: string;
    }

    export interface Provider {
        caption: string;
        images: Images2;
        actions: Action3[];
        type: string;
    }

    export interface Hub {
        type: string;
        image: string;
        actions: Action[];
        options: Option[];
        providers: Provider[];
        explicit: boolean;
        displayname: string;
    }

    export interface Artist {
        id: string;
        adamid: string;
    }

    export interface Track {
        layout: string;
        type: string;
        key: string;
        title: string;
        subtitle: string;
        share: Share;
        images: Images;
        hub: Hub;
        artists: Artist[];
        url: string;
    }

    export interface RootObject {
        tracks: Track[];
        track :Track[];

}

