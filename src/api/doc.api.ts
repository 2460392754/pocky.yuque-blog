import Axios from '../plugins/axios';
import { IDocApi, IDocApiGetDocArgs } from '../interfaces/doc.interface';

export class DocApi implements IDocApi {
    // 获取一个仓库的文档列表
    getDocs(id: string, token?: string) {
        return Axios.get(`/repos/${id}/docs`, {
            headers: token && {
                'X-Auth-Token': token
            }
        });
    }

    // 获取单篇文档的详细信息
    getDoc({ id, docId, raw, token }: IDocApiGetDocArgs): Promise<any> {
        return Axios.get(`/repos/${id}/docs/${docId}`, {
            params: {
                raw
            },
            headers: token && {
                'X-Auth-Token': token
            }
        });
    }
}
