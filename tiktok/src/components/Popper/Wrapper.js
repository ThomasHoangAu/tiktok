import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, classNamez }) {
    return <div className={cx('wrapper', classNamez)}>{children}</div>;
}

export default Wrapper;
