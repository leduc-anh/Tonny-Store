import React from 'react';
import { useParams } from 'react-router-dom';
import AppLayOut from '../components/DefaultLayout';
function ProductDetailPage() {
    const { name } = useParams();

    return (
        <AppLayOut>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Chi tiết sản phẩm</h1>
                <p>Tên sản phẩm: {name.replaceAll("-", " ")}</p>
                {/* Ở đây bạn có thể fetch dữ liệu sản phẩm bằng name */}
            </div>
        </AppLayOut>
    );
}

export default ProductDetailPage
