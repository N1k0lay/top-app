import React, {useState} from 'react';
import {ReviewFormProps} from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {Input} from "../Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../Textarea/Textarea";
import {Button} from "../Button/Button";
import CloseIcon from './close.svg';
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSendResponse} from "./ReviewForm.interface";
import axios from "axios";
import {API} from "../../helpers/api";
import {string} from "prop-types";

export const ReviewForm = ({productId, isOpened, className, ...props}: ReviewFormProps): JSX.Element => {

    const {register, control, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        console.log(formData);
        try {
            const {data} = await axios.post<IReviewSendResponse>(API.review.createDemo, {...formData, productId});

            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что то пошло не так');
            }
        } catch (e) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setError(e.message);
        }
    };

    return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register('name', {required: {value: true, message: "Заполните имя"}})}
                    placeholder={'Имя'}
                    error={errors.name}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={!!errors.name}
                />
                <Input
                    {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
                    placeholder={'Заголовок'}
                    className={styles.title}
                    error={errors.title}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={!!errors.title}

                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{required: {value: true, message: 'Укажите рейтинг'}}}
                        render={({field}) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                            />
                        )}/>
                </div>
                <Textarea
                    {...register('description', {required: {value: true, message: 'Заполните текст отзыва'}})}
                    placeholder={'Текст отзыва'}
                    className={styles.description}
                    error={errors.description}
                    tabIndex={isOpened ? 0 : -1}
                    aria-label={'Текст отзыва'}
                    aria-invalid={!!errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance={'primary'} tabIndex={isOpened ? 0 : -1}
                            onClick={() => clearErrors()}>Отправить</Button>
                    <span
                        className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)} role={"alert"}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div className={styles.successDescription}>Ваш отзыв будет опубликован после проверки</div>
                <button
                    className={styles.close}
                    onClick={() => setIsSuccess(false)}
                    aria-label={`закрыть оповещение`}>
                    <CloseIcon/>
                </button>
            </div>}
            {error && <div className={cn(styles.error, styles.panel)} role={"alert"}>
                <div className={styles.errorTitle}>{error}</div>
                <div className={styles.errorDescription}>Ваш отзыв будет опубликован после проверки</div>
                <button
                    className={styles.close}
                    onClick={() => setError(undefined)}
                    aria-label={`закрыть оповещение`}>
                    <CloseIcon/>
                </button>
            </div>}

        </form>
    );
};