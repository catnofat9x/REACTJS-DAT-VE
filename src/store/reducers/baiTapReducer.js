const stateDefault = {
    danhSachGheDangDat: [
        // {soGhe: 'A1', gia: 1000},
        // {soGhe: 'A4', gia: 1000}
    ]
}

export const baiTapDatVeReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if(index !== -1) {// Khi người dùng click vào ghế đang đặt đã có trong mảng => remove đi
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {// // Khi người dùng click vào ghế đang đặt không có trong mảng => push vào
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            //Cập nhật lại State => giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }
        case 'HUY_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe)
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }
        default: return {...state}
    }
}