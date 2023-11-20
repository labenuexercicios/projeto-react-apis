import { DotSpinner } from '@uiball/loaders';
import { ContainerLoader } from './style';

export const Loader = () => {
	return (
        <ContainerLoader>
            <DotSpinner size={40} speed={0.9} color='black' />;
        </ContainerLoader>
    )
};
