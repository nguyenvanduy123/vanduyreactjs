import AppAction from './action';
const tmpRow = [];
for (let i = 1; i <= 100; i++) {
    tmpRow.push({
        mancc: 'NC0000' + i.toString(),
        namncc: 'Nhà cung cấp ' + i.toString(),
        danhmuc: "Ngành may mặc"+ i.toString(),
        macode: "322"+ i.toString(),
        macongno: "11111202" + i.toString(),
        phone: "0358749335",
        email: "abc123@gmail.com",
        address: "72 Núi Thành, Đà Nẵng",
        province: "Đà Nẵng",
        district: "Hải Châu",
        war: "Hoà Thuận Đông",
        status: 1,
        deleted: false,
        id: i

    })

}
let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
    sampleData: {
        loading: false,
        data: {}
    },
    superliData: {
        loading: false,
        data: tmpRow,
        detail: {},
    }
};

const AppReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case AppAction.LOADING_APP_START:
            return {
                ...state,
                loadingApp: true,
            };
        case AppAction.CLOSE_LOADING_APP:
            return {
                ...state,
                loadingApp: false,
            };
        case AppAction.LOADING_APP_POPUP_START:
            return {
                ...state,
                loadingAppPopup: true,
            };
        case AppAction.CLOSE_LOADING_APP_POPUP:
            return {
                ...state,
                loadingAppPopup: false,
            };
        case AppAction.FETCH_SAMPLE_1:

            return {
                ...state,
                sampleData: {
                    ...state.sampleData,
                    loading: true,
                },
            };
        case AppAction.FETCH_SAMPLE_1_SUCCESS:
            return {
                ...state,
                sampleData: {
                    ...state.sampleData,
                    data: action.payload,
                    loading: false,
                },
            };
        case AppAction.FETCH_GET_DATA:
            return {
                ...state,
                superliData: {
                    ...state.superliData,
                    // data: action.payload,
                    loading: true,
                },
            };
        case AppAction.FETCH_GET_DATA_SUCCESS:
            return {
                ...state,
                superliData: {
                    ...state.superliData,
                    // data: action.payload,
                    loading: false,
                },
            };
        case AppAction.FETCH_POST_DATA:
            return {
                ...state,
                superliData: {
                    ...state.superliData,
                    data: state.superliData.data,
                    loading: true,
                },
            };
        case AppAction.FETCH_POST_DATA_SUCCESS:

            // ////////
            let i = 0;

            const dd = state.superliData.data;
            dd.map((item, index) =>
            {
                if (item.id == action.payload.data.id) {
                    i = index
                }
            });
            dd[i] = action.payload.data

            // ////////
            return {
                ...state,
                superliData: {
                    ...state.superliData,
                    data: dd,
                    loading: false,
                },
            };
        case AppAction.FETCH_GET_DATA_ID:

            return {
                ...state,
                superliData: {
                    ...state.superliData,
                    data: state.superliData.data,
                    loading: true,
                },
            };
        case AppAction.FETCH_GET_DATA_ID_SUCCESS:

            let record = state.superliData.data.filter(item =>
            {
                return parseInt(item.id) == parseInt(action.payload.data);
            });
            // ////////
            return {
                ...state,
                superliData: {
                    ...state.superliData,
                    data: state.superliData.data,
                    detail: record,
                    loading: false,
                },
            };
        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;
