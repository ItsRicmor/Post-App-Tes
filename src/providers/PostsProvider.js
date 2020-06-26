import environment from '@environments';
import * as EffectUtility from 'utils/EffectUtility';
import PostModel from 'models/PostModel';

export async function getPosts() {
    const endpoint = environment.api.posts.replace(':id', '')
    return EffectUtility.getToModel(PostModel, endpoint);
}

export async function getPostById(id) {
    const endpoint = environment.api.posts.replace(':id', id)
    return EffectUtility.getToModel(PostModel, endpoint);
}

export async function deletePostById(id) {
    const endpoint = environment.api.posts.replace(':id', id)
    return EffectUtility.deleteToModel(PostModel, endpoint);
}

export async function createPosts(post) {
    const endpoint = environment.api.posts.replace(':id', '')
    return EffectUtility.postToModel(PostModel, endpoint, post);
}
