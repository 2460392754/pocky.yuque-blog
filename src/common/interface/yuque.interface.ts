// user
interface IUserIntfoCommonApi {
    id: number;
    type: string;
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
}

export interface IUserInfoApi extends IUserIntfoCommonApi {
    space_id: number;
    account_id: number;
    login: string;
}

export interface IUserInfoTokenApi extends IUserInfoApi {}

// repo
export interface IRepoInfoApi {
    id: number;
    type: string;
    slug: string;
    name: string;
    user_id: number;
    description: string;
    toc: string;
    toc_yml: string;
    creator_id: number;
    public: number;
    items_count: number;
    likes_count: number;
    watches_count: number;
    pinned_at: null;
    archived_at: null;
    namespace: string;
    user: IUserIntfoCommonApi;
    created_at: Date;
    updated_at: Date;
    _serializer: string;
}

export interface IRepoTocApiArr {
    title: string;
    slug: string;
    depth: number;
}

// doc
interface IDocApiUserCommon {
    id: number;
    type: string;
    login: string;
    name: string;
    description: string;
    avatar_url: string;
    large_avatar_url: string;
    medium_avatar_url: string;
    small_avatar_url: string;
    books_count: number;
    public_books_count: number;
    followers_count: number;
    following_count: number;
    created_at: Date;
    updated_at: Date;
    _serializer: string;
}

export interface IDocApiArr {
    abilities: {
        update: boolean;
        destroy: boolean;
    };
    data: {
        id: number;
        slug: string;
        title: string;
        book_id: number;
        user_id: number;
        format: string;
        body: string;
        body_draft: string;
        body_html: string;
        body_lake: string;
        public: number;
        status: null;
        likes_count: number;
        comments_count: number;
        content_updated_at: Date;
        deleted_at: null | Date;
        created_at: Date;
        updated_at: Date;
        published_at: Date;
        first_published_at: Date;
        word_count: string;
        cover: null;
        description: string;
        custom_description: null;
        _serializer: string;
        book: {
            id: number;
            type: string;
            slug: string;
            name: string;
            user_id: number;
            description: string;
            creator_id: number;
            public: number;
            items_count: number;
            likes_count: number;
            watches_count: number;
            content_updated_at: Date;
            updated_at: Date;
            created_at: Date;
            namespace: string;
            _serializer: string;
            user: IDocApiUserCommon;
        };
        creator: IDocApiUserCommon;
    };
}

export interface IDocTocApiArr {
    id: number;
    slug: string;
    title: string;
    description: string;
    user_id: string;
    book_id: string;
    format: string;
    public: number;
    status: number;
    likes_count: number;
    comments_count: number;
    content_updated_at: Date;
    created_at: Date;
    updated_at: Date;
    published_at: Date;
    first_published_at: Date;
    draft_version: number;
    last_editor_id: number;
    word_count: number;
    cover: null;
    custom_description: null;
    book: null;
    _serializer: string;
    last_editor: {
        id: number;
        type: string;
        login: string;
        name: string;
        description: string;
        avatar_url: string;
        large_avatar_url: string;
        medium_avatar_url: string;
        small_avatar_url: string;
        followers_count: number;
        following_count: number;
        created_at: Date;
        updated_at: Date;
        _serializer: string;
    };
}
