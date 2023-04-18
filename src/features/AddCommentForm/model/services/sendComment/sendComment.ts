// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getUserAuthData } from 'entities/User';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import { Comment } from 'entities/Comment';
// import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/addCommentFormSelectors';
// import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
// import { addCommentFormActions } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
//
// export const sendComment = createAsyncThunk<
//     Comment,
//     void,
//     ThunkConfig<string>
//     >(
//         'addCommentForm/sendComment',
//         async (authData, thunkApi) => {
//             const {
//                 extra, dispatch, rejectWithValue, getState,
//             } = thunkApi;
//
//             const userData = getUserAuthData(getState());
//             const text = getAddCommentFormText(getState());
//             const article = getArticleDetailsData(getState());
//
//             if (!userData || !text || !article) {
//                 return rejectWithValue('no data');
//             }
//             try {
//                 const response = await extra.api.post<Comment>('/comments', {
//                     articleId: article.id,
//                     userId: userData.id,
//                     text,
//                 });
//
//                 if (!response.data) {
//                     throw new Error();
//                 }
//
//                 dispatch(addCommentFormActions.setText(''));
//
//                 return response.data;
//             } catch (e) {
//                 return rejectWithValue('error');
//             }
//         },
//     );
// function getState(): import('app/providers/StoreProvider').StateSchema {
//     throw new Error('Function not implemented.');
// }
