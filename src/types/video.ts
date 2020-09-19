export interface IVideoMin {
    title: string;
    image: string;
    channel: string;
    timestamp: string;
    views: string;
};

export default interface IVideo extends IVideoMin {
    channelImage: string;
};

export interface IVideoRow extends IVideoMin {
    subs: string;
    description: string;    
};
