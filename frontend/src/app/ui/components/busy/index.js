import LoadingSVG from '@/../public/images/img_loader.svg';

import './styles.css';

export default function ShowBusy({ busy, msg }) {
    return busy ? (
        <div className="busy">
            <div className="l-card">
                <LoadingSVG></LoadingSVG>
                <small>{msg}</small>
            </div>
        </div>
    ) : <></>
}