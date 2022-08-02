import Image, { ImageProps } from 'next/image';

export interface IStyledImg extends ImageProps {
  alt: string;
  className?: string;
}

const StyledImg: React.FC<IStyledImg> = ({ alt, className, ...imageProps }) => {
  return (
    <span className={className ?? ''}>
      <Image alt={alt} className={className ?? ''} {...imageProps} />
    </span>
  );
};

export default StyledImg;
