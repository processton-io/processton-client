import classNames from "classnames";

export default function RowElement({ element, children, wrapperClassName="" }) {
    const { xxxs = 12, xxs = 12, xs = 12, sm, md, lg, xl = lg, xxl =lg, xxxl = lg  } = element.width;
    return (
        <div className={classNames( wrapperClassName , {
            'col-span-12' : xxxs == 12,
            'col-span-11' : xxxs == 11,
            'col-span-10' : xxxs == 10,
            'col-span-9' : xxxs == 9,
            'col-span-8' : xxxs == 8,
            'col-span-7' : xxxs == 7,
            'col-span-6' : xxxs == 6,
            'col-span-5' : xxxs == 5,
            'col-span-4' : xxxs == 4,
            'col-span-3' : xxxs == 3,
            'col-span-2' : xxxs == 2,
            'col-span-1' : xxxs == 1,
            'hidden' : xxxs == 0,
            'xxxs:col-span-12' : xxxs == 12,
            'xxxs:col-span-11' : xxxs == 11,
            'xxxs:col-span-10' : xxxs == 10,
            'xxxs:col-span-9' : xxxs == 9,
            'xxxs:col-span-8' : xxxs == 8,
            'xxxs:col-span-7' : xxxs == 7,
            'xxxs:col-span-6' : xxxs == 6,
            'xxxs:col-span-5' : xxxs == 5,
            'xxxs:col-span-4' : xxxs == 4,
            'xxxs:col-span-3' : xxxs == 3,
            'xxxs:col-span-2' : xxxs == 2,
            'xxxs:col-span-1' : xxxs == 1,
            'xxxs:hidden' : xxxs == 0,
            'xxs:col-span-12' : xxs == 12,
            'xxs:col-span-11' : xxs == 11,
            'xxs:col-span-10' : xxs == 10,
            'xxs:col-span-9' : xxs == 9,
            'xxs:col-span-8' : xxs == 8,
            'xxs:col-span-7' : xxs == 7,
            'xxs:col-span-6' : xxs == 6,
            'xxs:col-span-5' : xxs == 5,
            'xxs:col-span-4' : xxs == 4,
            'xxs:col-span-3' : xxs == 3,
            'xxs:col-span-2' : xxs == 2,
            'xxs:col-span-1' : xxs == 1,
            'xxs:hidden' : xxs == 0,
            'xs:col-span-12' : xs == 12,
            'xs:col-span-11' : xs == 11,
            'xs:col-span-10' : xs == 10,
            'xs:col-span-9' : xs == 9,
            'xs:col-span-8' : xs == 8,
            'xs:col-span-7' : xs == 7,
            'xs:col-span-6' : xs == 6,
            'xs:col-span-5' : xs == 5,
            'xs:col-span-4' : xs == 4,
            'xs:col-span-3' : xs == 3,
            'xs:col-span-2' : xs == 2,
            'xs:col-span-1' : xs == 1,
            'xs:hidden' : xs == 0,
            'sm:col-span-12' : sm == 12,
            'sm:col-span-11' : sm == 11,
            'sm:col-span-10' : sm == 10,
            'sm:col-span-9' : sm == 9,
            'sm:col-span-8' : sm == 8,
            'sm:col-span-7' : sm == 7,
            'sm:col-span-6' : sm == 6,
            'sm:col-span-5' : sm == 5,
            'sm:col-span-4' : sm == 4,
            'sm:col-span-3' : sm == 3,
            'sm:col-span-2' : sm == 2,
            'sm:col-span-1' : sm == 1,
            'sm:hidden' : sm == 0,
            'md:col-span-12' : md == 12,
            'md:col-span-11' : md == 11,
            'md:col-span-10' : md == 10,
            'md:col-span-9' : md == 9,
            'md:col-span-8' : md == 8,
            'md:col-span-7' : md == 7,
            'md:col-span-6' : md == 6,
            'md:col-span-5' : md == 5,
            'md:col-span-4' : md == 4,
            'md:col-span-3' : md == 3,
            'md:col-span-2' : md == 2,
            'md:col-span-1' : md == 1,
            'md:hidden' : md == 0,
            'lg:col-span-12' : lg == 12,
            'lg:col-span-11' : lg == 11,
            'lg:col-span-10' : lg == 10,
            'lg:col-span-9' : lg == 9,
            'lg:col-span-8' : lg == 8,
            'lg:col-span-7' : lg == 7,
            'lg:col-span-6' : lg == 6,
            'lg:col-span-5' : lg == 5,
            'lg:col-span-4' : lg == 4,
            'lg:col-span-3' : lg == 3,
            'lg:col-span-2' : lg == 2,
            'lg:col-span-1' : lg == 1,
            'lg:hidden' : lg == 0,
            'xl:col-span-12' : xl == 12,
            'xl:col-span-11' : xl == 11,
            'xl:col-span-10' : xl == 10,
            'xl:col-span-9' : xl == 9,
            'xl:col-span-8' : xl == 8,
            'xl:col-span-7' : xl == 7,
            'xl:col-span-6' : xl == 6,
            'xl:col-span-5' : xl == 5,
            'xl:col-span-4' : xl == 4,
            'xl:col-span-3' : xl == 3,
            'xl:col-span-2' : xl == 2,
            'xl:col-span-1' : xl == 1,
            'xl:hidden' : xl == 0,
            '2xl:col-span-12' : xxl == 12,
            '2xl:col-span-11' : xxl == 11,
            '2xl:col-span-10' : xxl == 10,
            '2xl:col-span-9' : xxl == 9,
            '2xl:col-span-8' : xxl == 8,
            '2xl:col-span-7' : xxl == 7,
            '2xl:col-span-6' : xxl == 6,
            '2xl:col-span-5' : xxl == 5,
            '2xl:col-span-4' : xxl == 4,
            '2xl:col-span-3' : xxl == 3,
            '2xl:col-span-2' : xxl == 2,
            '2xl:col-span-1' : xxl == 1,
            '2xl:hidden' : xxl == 0,
            '3xl:col-span-12' : xxxl == 12,
            '3xl:col-span-11' : xxxl == 11,
            '3xl:col-span-10' : xxxl == 10,
            '3xl:col-span-9' : xxxl == 9,
            '3xl:col-span-8' : xxxl == 8,
            '3xl:col-span-7' : xxxl == 7,
            '3xl:col-span-6' : xxxl == 6,
            '3xl:col-span-5' : xxxl == 5,
            '3xl:col-span-4' : xxxl == 4,
            '3xl:col-span-3' : xxxl == 3,
            '3xl:col-span-2' : xxxl == 2,
            '3xl:col-span-1' : xxxl == 1
        })}>
            {children}
        </div>
    );
}