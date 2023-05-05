// import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { initArticlesPage } from './initArticlesPage';
// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
//
// jest.mock('../fetchArticlesList/fetchArticlesList');
//
// describe('initArticlesPage.test', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//             },
//         });
//
//         await thunk.callThunk();
//
//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
//     });
//     test('fetchAritcleList not called', async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: false,
//                 _inited: true,
//             },
//         });
//
//         await thunk.callThunk('url');
//
//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(fetchArticlesList).not.toHaveBeenCalled();
//     });
// });
