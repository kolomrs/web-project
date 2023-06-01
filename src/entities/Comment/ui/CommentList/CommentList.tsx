import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../module/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comment?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comment?.length
                ? comment.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
                : <Text text={t('Коментарии отсутствуют')} />}
        </VStack>
    );
});
