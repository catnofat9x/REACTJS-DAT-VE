import React, { Component } from 'react'
import {connect} from 'react-redux'

class ThongTinDatVe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5 text-left'>
          <button className='gheDuocChon'></button><span className='text-white ml-1' style={{ fontSize: '25px' }}>Ghế đã đặt</span>
          <br />
          <button className='gheDangChon'></button><span className='text-white ml-1' style={{ fontSize: '25px' }}>Ghế đang chọn</span>
          <br />
          <button className='ghe' style={{ marginLeft: '0px' }}></button><span className='text-white ml-1' style={{ fontSize: '25px' }}>Ghế chưa đặt</span>
        </div>
        <div className='mt-3'>
          <table className="table" border={1}>
            <thead>
              <tr className='text-white' style={{ fontSize: '25px' }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th><i class="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody className='text-warning'>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia.toLocaleString()}vnđ</td>
                  <td><button
                   className='btn btn-danger'
                   onClick={() => {
                    this.props.dispatch({
                      type: 'HUY_GHE',
                      soGhe: gheDangDat.soGhe
                    })
                   }}>Hủy</button></td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className='text-white'>Tổng tiền</td>
                <td className='text-warning'>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) =>{
                  return tongTien += gheDangDat.gia
                }, 0).toLocaleString()}vnđ</td>
                <td><button className='btn btn-success'>Thanh toán</button></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    danhSachGheDangDat: rootReducers.baiTapDatVeReducer.danhSachGheDangDat
  }
}

export default connect(mapStateToProps)(ThongTinDatVe)
