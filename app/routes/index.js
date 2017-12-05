import userRoute from './user';
import postsRoute from './post';
import authRoute from './auth';

export default [...userRoute, ...postsRoute, ...authRoute];