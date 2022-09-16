import React, { Component } from 'react'
import {connect} from 'react-redux'

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false;
            //Trạng thái ghế đã có người đặt
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }

            //xét trạng thái ghế đang đặt
            let cssGheDangChon = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangChon = 'gheDangChon'
            }

            return <button
                onClick={() => {
                    this.props.datGhe(ghe)
                }} 
                className={`ghe ${cssGheDaDat} ${cssGheDangChon}`}
                key={index}
                disabled={disabled}>
                {index + 1}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber' key={index}>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-2'>
                {this.props.hangGhe.hang}
                {this.renderSoHang()}
            </div>
        }
        return <div>
            {this.props.hangGhe.hang}
            {this.renderGhe()}
        </div>
    }

    render() {
        return (
            <div className='text-light text-left ml-4 mt-3' style={{ fontSize: 20, marginLeft: '10px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (rootReducers) => {
    return {
        danhSachGheDangDat: rootReducers.baiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch({
                type: 'DAT_GHE',
                ghe
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
