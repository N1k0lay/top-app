import React, {useRef, useState} from 'react';
import {ProductProps} from "./Product.props";
import styles from './Product.module.css';
import {Card} from '../Card/Card';
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from '../Button/Button';
import {declOfNumber, priceRu} from '../../helpers/helpers';
import {Divider} from "../Divider/Divider";
import Image from 'next/image';
import cn from "classnames";
import {Review} from "../Review/Review";
import {ReviewForm} from "../ReviewForm/ReviewForm";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: "end"
        });
    };

    return (
        <div className={className} {...props}>
            <Card className={styles.product}>
                {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
                <div className={styles.logo}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag color={"green"}
                                              className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>{priceRu(product.credit)}<span className={styles.mouth}>/мес</span></div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category}
                                                                               color={"ghost"}>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>
                    <a href="#ref" onClick={scrollToReview}>{product.reviewCount} {declOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a>
                </div>
                <Divider className={styles.hr}/>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicName}>{c.name}</span>
                            <span className={styles.characteristicDots}></span>
                            <span className={styles.characteristicValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages &&
                        <div className={styles.advantages}>
                            <div className={styles.advTitle}>Преимущества</div>
                            {product.advantages}
                        </div>}
                    {product.disadvantages &&
                        <div className={styles.disadvantages}>
                            <div className={styles.advTitle}>Недостатки</div>
                            {product.disadvantages}
                        </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)}/>
                <div className={styles.actions}>
                    <Button appearance={"primary"}>Узнать подробнее</Button>
                    <Button
                        appearance={"ghost"}
                        className={styles.reviewButton}
                        arrow={isReviewOpened ? "down" : "right"}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <Card color={"blue"} className={cn(styles.reviews, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened
            })}
                  ref={reviewRef}
            >
                {product.reviews.map(r => (
                    <div key={r._id}>
                        <Review review={r}/>
                        <Divider/>
                    </div>
                ))}
                <ReviewForm productId={product._id}/>
            </Card>
        </div>
    );
};