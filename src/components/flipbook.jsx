import HTMLFlipBook from 'react-pageflip';

export const MyBook=(props)=> {
    return (
        <HTMLFlipBook width={300} height={500}>
            <div className="demoPage">Page 1<img src='https://lh3.googleusercontent.com/gRClPoBeYUP90pKUgvWQ6MzrWgM2MJjWRyk4P230DcNwWgqTDhjKiW5GxtXPCHd3wzFnh36gTEpUci4Cp7z6VEcCquBHXjds6VvCZSRxGHMCFSBpRuBdXn8zyLVKmhu4mUq8rQskuw=w2400'></img></div>
            <div className="demoPage">Page 2</div>
            <div className="demoPage">Page 3</div>
            <div className="demoPage">Page 4</div>
        </HTMLFlipBook>
    );
}