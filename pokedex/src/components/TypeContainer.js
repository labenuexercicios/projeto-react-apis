import Image from 'next/image';

function TypeContainer({ type, customClass }) {
    return (
        <span className={`flex gap-4 p-2 rounded-xl ${customClass || ''}`}>
            <Image
                src={`/images/type-icons/${type}.svg`}
                width={19}
                height={21}
                alt={`${type} icon`}
            />{' '}
            {type}
        </span>
    );
}

export default TypeContainer;
