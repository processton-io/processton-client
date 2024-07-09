import { User } from '../../types'

import classNames from 'classnames';
import { route } from 'ziggy-js';

import Dropdown from '../Dropdown';

type UserDopdownProps = {
    user: User|null
}

export default function UserDropdown ({user} : UserDopdownProps ) {
    return (<>
        {user && <div className="hidden sm:flex sm:items-center sm:ml-3">
            <div className="ml-3 relative">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className={classNames("inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 bg-white text-gray-500 hover:text-gray-700")}
                            >
                                {user.name}

                                <svg
                                    className="ml-2 -mr-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>}
    </>)
}