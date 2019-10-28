
import React, { PureComponent } from 'react';
import './style.min.css'
import {
    Affix,
    Icon
} from 'antd';

class AffixCom extends PureComponent {
    render() {
        return (
            // <Affix offsetTop={10}>
                <Icon type="vertical-align-top" className="iconStyle"/>
            // </Affix>
        )
    }
}

export default AffixCom

