export interface UserInfo {
    data: {
        id: number;
        type: string;
        space_id: number;
        account_id: number;
        login: string;
        name: string;
        avatar_url: string;
        large_avatar_url: string;
        medium_avatar_url: string;
        small_avatar_url: string;
        books_count: number;
        public_books_count: number;
        followers_count: number;
        following_count: number;
        public: number;
        description: string;
        created_at: Date;
        updated_at: Date;
        _serializer: string;
    };
}
