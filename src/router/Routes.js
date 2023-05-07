
import HomePage from "pages/home/HomePage";
import MainLayout from "shared/components/layout/MainLayout";
import { AdminGuard } from "./guards/AdminGuard";
import Nhacungcap from "pages/listnhacungcap/nhacungcap";
import Detailncc from "pages/detailncc/detailncc";
import Addncc from "pages/addncc/addncc";
import Editncc from "pages/editncc/editncc";

const Routes = [
    {
        layout: MainLayout,
        routes: [
            {
                id: 'edit',
                title: 'Chỉnh sửa NCC',
                // guards: [AdminGuard],
                component: <Editncc />,
                fallback: () => {
                    return null;
                }
            },
            {
                id: 'add',
                title: 'Tạo mới NCC',
                // guards: [AdminGuard],
                component: <Addncc />,
                fallback: () => {
                    return null;
                }
            },
            {
                id: 'detail',
                title: 'Chi tiết NCC',
                component: <Detailncc />,
                fallback: () => {
                    return null;
                }
            },
            {
                id: 'nhacungcap',
                title: 'Danh sách NCC',
                component: <Nhacungcap />,
                fallback: () => {
                    return null;
                }
            },
            {
                id: 'HOME',
                guards: [AdminGuard],
                component: <HomePage />,
                fallback: () => {
                    return null;
                }
            }
        ]
    },
];

export default Routes