import HTMLFlipBook from 'react-pageflip';
import {bikeImages} from '../assets/images'
export const MyBook=(props)=> {
    return (
        <HTMLFlipBook width={300} height={500}>
            <div className="demoPage">Page 1<img src={bikeImages[1]}></img>Built a frame from a drawing I found online</div>
            <div className="demoPage">Page 2<img src={bikeImages[2]}></img></div>
            <div className="demoPage">Page 3<img src={bikeImages[3]}></img></div>
            <div className="demoPage">Page 4<img src={bikeImages[4]}></img></div>
            <div className="demoPage">Page 5<img src={bikeImages[5]}></img></div>
            <div className="demoPage">Page 6<img src={bikeImages[6]}></img></div>
            <div className="demoPage">Page 7<img src={bikeImages[7]}></img></div>
            <div className="demoPage">Page 8<img src={bikeImages[8]}></img></div>
            <div className="demoPage">Page 9<img src={bikeImages[9]}></img></div>
            <div className="demoPage">Page 10<img src={bikeImages[10]}></img></div>
            <div className="demoPage">Page 11<img src={bikeImages[11]}></img></div>
            <div className="demoPage">Page 12<img src={bikeImages[12]}></img></div>
            <div className="demoPage">Page 13<img src={bikeImages[13]}></img></div>
            <div className="demoPage">Page 14<img src={bikeImages[14]}></img></div>
            <div className="demoPage">Page 15<img src={bikeImages[15]}></img></div>
            <div className="demoPage">Page 16<img src={bikeImages[16]}></img></div>
            <div className="demoPage">Page 17<img src={bikeImages[17]}></img></div>
            <div className="demoPage">Page 18<img src={bikeImages[18]}></img></div>
            <div className="demoPage">Page 19<img src={bikeImages[19]}></img></div>
            <div className="demoPage">Page 20<img src={bikeImages[20]}></img></div>
        </HTMLFlipBook>
    );
}