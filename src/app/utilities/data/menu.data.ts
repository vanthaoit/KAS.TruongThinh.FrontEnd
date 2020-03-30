import { IMenu } from '../interfaces/IMenu';

export const menuData: IMenu[] = [
    {

        id: 0,
        name: 'Gia công cơ khí (GCCK)',
        description: 'Gia công cơ khí'
    },
    {

        id: 1,
        name: 'Tư vấn xây dựng (TVXD)',
        description: 'Tư vấn xây dựng',
        childMenu:
            [
                {
                    id: 0,
                    name: 'Khảo sát thiết kế',
                    description: 'Khảo sát thiết kế'
                },
                {
                    id: 1,
                    name: 'Giám sát xây dựng',
                    description: 'Giám sát xây dựng'
                },
                {
                    id: 2,
                    name: 'Dịch vụ tư vấn khác',
                    description: 'Dịch vụ tư vấn khác'
                }
            ]
    },
    {

        id: 2,
        name: 'Sản xuất kinh doanh (SXKD)',
        description: 'Đầu tư & Sản xuất kinh doanh (SXKD)'
    }
]
