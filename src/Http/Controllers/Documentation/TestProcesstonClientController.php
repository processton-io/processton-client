<?php

namespace Processton\ProcesstonClient\Http\Controllers\Documentation;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Processton\ProcesstonClient\Models\Application;
use Processton\ProcesstonClient\Models\DropletDataTable;
use Processton\ProcesstonClient\Models\DropletForm;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Processton\ProcesstonClient\Models\DropletObject;
use Processton\ProcesstonClient\Models\ObjectRecord;
use Illuminate\Support\Arr;
use Processton\ProcesstonClient\ProcesstonClient;


class TestProcesstonClientController extends Controller
{

    protected $_layoutData;

    function __construct(){
        $this->_layoutData = [
            'org' => [
                'name' => 'Processton Client'
            ],
            'application' => [
                'name' => 'Documentation',
                'slug' => 'documentation',
                'menu' => [
                    [
                        'label' => 'Dashboard',
                        'slug' => '/documentation',
                        'icon' => 'home'
                    ],
                    [
                        'label' => 'Stats Cards',
                        'slug' => '/documentation/stats',
                        'icon' => 'activity',
                    ],
                    [
                        'label' => 'Forms',
                        'slug' => '/documentation/forms',
                        'icon' => 'monitor'
                    ],
                    [
                        'label' => 'Data Table',
                        'slug' => '/documentation/data_table',
                        'icon' => 'database'
                    ]
                ],
            ],
        ];
    }
    public function index(Request $request): Response
    {
        $interaction = ProcesstonClient::generateInteraction(
                'Dashboard',
                'dashboard',
                'Dashboard',
                'dashboard',
                [],
                [],
                [
                    ProcesstonClient::generateRow([
                        ProcesstonClient::generateStatsCard(
                            'Total Applications',
                            rand(10, 0),
                            'activity',
                            '',
                            true,
                            [],
                            route('processton-client.app.test.counter')
                        ),
                        ProcesstonClient::generateStatsCard(
                            'Total Clouds',
                            rand(10, 18000000),
                            'cloud',
                            '',
                            true
                        ),
                    ], 12, 12, 12, 12, 12, 12, 12, 12, 12),
                    ProcesstonClient::generateRow([
                        ProcesstonClient::generateForm(
                            'Form Title',
                            route('processton-client.app.test.form.submission'),
                            ProcesstonClient::generateFormSchema(
                                'Form Title',
                                'create',
                                ProcesstonClient::generateFormRows(
                                    ProcesstonClient::generateFormRow([
                                        ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                        ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                    ]),
                                    ProcesstonClient::generateFormRow([
                                        ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                    ])
                                )
                            ),
                            [],
                            [],
                            '',
                            'Subtitle',
                            12, 12, 12, 12, 6, 6, 6, 6, 6
                        ),
                        ProcesstonClient::generateDataTable(
                            'Data Table',
                            [
                                [
                                    'value' => 'title',
                                    'key' => 'Title'
                                ]
                            ],
                            $this->paginate([
                                ['id'=>1, 'title'=>'Laravel CRUD'],
                                ['id'=>2, 'title'=>'Laravel Ajax CRUD'],
                                ['id'=>3, 'title'=>'Laravel CORS Middleware'],
                            ]),
                            false,
                            false,
                            false,
                            [],
                            [],
                            [],
                            '',
                            '',
                            '',
                            [],
                            12, 12, 12, 12, 6, 6, 6, 6, 6
                        ),
                    ], 12, 12, 12, 12, 12, 12, 12, 12, 12),
                ]
            );

        return Inertia::render('Builder',[
            ...$this->_layoutData,
            'interaction' => $interaction
        ]);

    }

    public function StatsCards(Request $request): Response
    {
        $interaction = ProcesstonClient::generateInteraction(
                'Dashboard',
                'dashboard',
                'Dashboard',
                'dashboard',
                [],
                [],
                [
                    ProcesstonClient::generateRow([
                        ProcesstonClient::generateCard(
                            ProcesstonClient::generateCardHeader(
                                'Stats Cards',
                                'Get quick insights into your data with Stat Cards and Calculated Value Cards.'
),
                            ProcesstonClient::generateCardBody([
                                ProcesstonClient::generateRow([
                                    ProcesstonClient::generateText(
                                        'From a user perspective, Stat Cards can:

                                        Provide Quick Insights: They provide a quick snapshot of important metrics or data points. This could be anything from total users, total sales, average response time, etc.

                                        Visual Appeal: They help in making the dashboard visually appealing and more user-friendly. They can include colors, icons, or even graphs to make the data more digestible.

                                        Efficient Use of Space: They are a compact way to display information. This allows for multiple different metrics to be displayed at once, which can be useful on a dashboard where space might be limited.

                                        A Calculated Value Card is a type of Stat Card that displays a value calculated from data in the system. For example, it could display the average rating of a product, the total revenue generated, or the percentage increase in user signups.

                                        By using a Calculated Value Card, users can:

                                        Monitor Key Metrics: Users can monitor key metrics that are important for their goals or KPIs. For example, a business owner might want to keep track of total sales or revenue.

                                        Make Informed Decisions: By having these calculated values readily available, users can make more informed decisions. For example, if a Calculated Value Card shows that a particular product\'s sales are declining, a business owner might decide to run a promotion to boost sales.

                                        Save Time: Calculated Value Cards save users from having to calculate these values manually. The system automatically updates the values as new data comes in, ensuring that the user always has the most up-to-date information.'
                                    ),
                                    ProcesstonClient::generateStatsCard(
                                        'Total Applications',
                                        rand(10, 0),
                                        'activity',
                                        '',
                                        true,
                                        [],
                                        route('processton-client.app.test.counter')
                                    ),
                                    ProcesstonClient::generateStatsCard(
                                        'Total Clouds',
                                        rand(10, 18000000),
                                        'cloud',
                                        '',
                                        true
                                    ),
                                ])
                            ],
                            ),
                            ProcesstonClient::generateCardFooter('Total Applications'),
                            '',
                            12, 12, 12, 12, 12, 12, 12, 12, 12
                        )
                    ], 6, 6, 6, 6, 6, 6, 6, 6, 6),
                    ProcesstonClient::generateRow([
                        ProcesstonClient::generateStatsCard(
                            'Total Applications',
                            rand(10, 0),
                            'activity',
                            '',
                            true,
                            [],
                            route('processton-client.app.test.counter')
                        ),
                        ProcesstonClient::generateStatsCard(
                            'Total Clouds',
                            rand(10, 18000000),
                            'cloud',
                            '',
                            true
                        ),
                    ], 6, 6, 6, 6, 6, 6, 6, 6, 6),
                    
                ]
            );
        return Inertia::render('Builder',[
            ...$this->_layoutData,
            'interaction' => $interaction
        ]);

    }

    public function Forms(Request $request): Response
    {
        $interaction = ProcesstonClient::generateInteraction(
                'Dashboard',
                'dashboard',
                'Dashboard',
                'dashboard',
                [],
                [],
                [
                    ProcesstonClient::generateRow([
                        ProcesstonClient::generateCard(
                            ProcesstonClient::generateCardHeader(
                                'Forms',
                                'Forms are used to gather information by providing fields for input, enabling interaction with the application, such as login, registration, data submission, and configuration settings.'
),
                            ProcesstonClient::generateCardBody([
                                ProcesstonClient::generateRow([
                                    ProcesstonClient::generateText(
                                        'Forms serve several important functions:

                                        Data Submission: Forms are the primary means for users to submit data to a web application. This could be anything from creating an account, posting a comment, submitting a search query, or updating a profile.

                                        Interaction: Forms provide a way for users to interact with a website or application. They can be used to input various types of data, including text, selections, files, etc.

                                        User Onboarding: Forms are often used in the registration process when a user signs up for a service. They can collect necessary information like email, password, and other user details.

                                        Feedback Collection: Forms can be used to collect feedback from users, such as surveys or contact forms. This allows users to communicate with the website administrators or support team.

                                        Data Filtering: In applications with large amounts of data, forms can be used to filter results. For example, a form could allow users to filter products by price, color, size, etc.

                                        Security: Login forms are a key aspect of user authentication, helping to ensure that only authorized users can access certain parts of an application.'
                                    ),
                                    ProcesstonClient::generateForm(
                                        'Form Title',
                                        route('processton-client.app.test.form.submission'),
                                        ProcesstonClient::generateFormSchema(
                                            'Form Title',
                                            'create',
                                            ProcesstonClient::generateFormRows(
                                                ProcesstonClient::generateFormRow([
                                                    ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                                    ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                                ]),
                                                ProcesstonClient::generateFormRow([
                                                    ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                                ])
                                            )
                                        ),
                                        [],
                                        [],
                                        '',
                                        'Subtitle',
                                        12, 12, 12, 12, 6, 6, 6, 6, 6
                                    ),
                                    ProcesstonClient::generateForm(
                                        'Form Title',
                                        route('processton-client.app.test.form.submission'),
                                        ProcesstonClient::generateFormSchema(
                                            'Form Title',
                                            'create',
                                            [],
                                        ),
                                        [],
                                        [],
                                        route('processton-client.app.test.form'),
                                        '',
                                        12, 12, 12, 12, 6, 6, 6, 6, 6
                                    ),
                                ])
                            ],
                            ),
                            ProcesstonClient::generateCardFooter('Total Applications'),
                            '',
                            12, 12, 12, 12, 12, 12, 12, 12, 12
                        )
                    ], 6, 6, 6, 6, 6, 6, 6, 6, 6),
                    ProcesstonClient::generateRow([
                        ProcesstonClient::generateForm(
                            'Form Title',
                            route('processton-client.app.test.form.submission'),
                            ProcesstonClient::generateFormSchema(
                                'Form Title',
                                'create',
                                ProcesstonClient::generateFormRows(
                                    ProcesstonClient::generateFormRow([
                                        ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                        ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                    ]),
                                    ProcesstonClient::generateFormRow([
                                        ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                                    ])
                                )
                            ),
                            [],
                            [],
                            '',
                            'Subtitle',
                            12, 12, 12, 12, 12, 12, 12, 12, 12
                        ),
                    ], 6, 6, 6, 6, 6, 6, 6, 6, 6),
                ]
            );

        // dd($interaction);
        return Inertia::render('Builder',[
            ...$this->_layoutData,
            'interaction' => $interaction
        ]);

    }

    public function DataTable(Request $request): Response
    {
        $interaction = ProcesstonClient::generateInteraction(
                'DataTable',
                'datatable',
                'DataTable',
                'table',
                [],
                [],
                [
                    ProcesstonClient::generateRow([
                        ProcesstonClient::generateCard(
                            ProcesstonClient::generateCardHeader(
                                'Table',
                                ''
),
                            ProcesstonClient::generateCardBody([
                                ProcesstonClient::generateRow([
                                    ProcesstonClient::generateText(
                                        'Forms serve several important functions:

                                        Data Submission: Forms are the primary means for users to submit data to a web application. This could be anything from creating an account, posting a comment, submitting a search query, or updating a profile.

                                        Interaction: Forms provide a way for users to interact with a website or application. They can be used to input various types of data, including text, selections, files, etc.

                                        User Onboarding: Forms are often used in the registration process when a user signs up for a service. They can collect necessary information like email, password, and other user details.

                                        Feedback Collection: Forms can be used to collect feedback from users, such as surveys or contact forms. This allows users to communicate with the website administrators or support team.

                                        Data Filtering: In applications with large amounts of data, forms can be used to filter results. For example, a form could allow users to filter products by price, color, size, etc.

                                        Security: Login forms are a key aspect of user authentication, helping to ensure that only authorized users can access certain parts of an application.'
                                    ),
                                    ProcesstonClient::generateDataTable(
                                        'Data Table',
                                        [
                                            [
                                                'value' => 'title',
                                                'key' => 'Title'
                                            ]
                                        ],
                                        $this->paginate([
                                            ['id'=>1, 'title'=>'Laravel CRUD'],
                                            ['id'=>2, 'title'=>'Laravel Ajax CRUD'],
                                            ['id'=>3, 'title'=>'Laravel CORS Middleware'],
                                        ]),
                                        false,
                                        false,
                                        false,
                                        [],
                                        [],
                                        [],
                                        '',
                                        '',
                                        '',
                                        [],
                                        12, 12, 12, 12, 12, 12, 12, 12, 12
                                    )
                                    
                                ])
                            ],
                            ),
                            ProcesstonClient::generateCardFooter('Total Applications'),
                            '',
                            12, 12, 12, 12, 12, 12, 12, 12, 12
                        )
                    ], 6, 6, 6, 6, 6, 6, 6, 6, 6),
                    ProcesstonClient::generateRow([
                        ProcesstonClient::generateDataTable(
                            'Data Table',
                            [
                                [
                                    'value' => 'title',
                                    'key' => 'Title'
                                ]
                            ],
                            $this->paginate([
                                ['id'=>1, 'title'=>'Laravel CRUD'],
                                ['id'=>2, 'title'=>'Laravel Ajax CRUD'],
                                ['id'=>3, 'title'=>'Laravel CORS Middleware'],
                            ]),
                            false,
                            false,
                            false,
                            [],
                            [],
                            [],
                            '',
                            route('processton-client.app.test.datatable'),
                            '',
                            [],
                            12, 12, 12, 12, 12, 12, 12, 12, 12
                        ),
                    ], 6, 6, 6, 6, 6, 6, 6, 6, 6),
                ]
            );

        // dd($interaction);
        return Inertia::render('Builder',[
            ...$this->_layoutData,
            'interaction' => $interaction
        ]);

    }

    public function statsData(Request $request): JsonResponse
    {
        return response()->json([
            'data' => ProcesstonClient::generateStatsCardData('Total Applications', rand(10, 1800000), true, 'activity')
        ]);
    }

    public function formData(Request $request): JsonResponse
    {
        return response()->json([
            'data' => ProcesstonClient::generateFormData(
                ProcesstonClient::generateFormSchema(
                    'Form Title',
                    'create',
                    ProcesstonClient::generateFormRows(
                        ProcesstonClient::generateFormRow([
                            ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                            ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                        ]),
                        ProcesstonClient::generateFormRow([
                            ProcesstonClient::generateFormRowElement('Name', 'text', 'name', 'Name', true),
                        ])
                    )
                ),
                [],
                route('processton-client.app.test.form.submission'),
                
            )
        ]);
    }

    public function formPost(){
        return response()->json([
            'data' => 'Form Submitted'
        ]);
    }

    public function getDatatableData(){
        $myArray = [
            ['id'=>1, 'title'=>'Laravel CRUD'],
            ['id'=>2, 'title'=>'Laravel Ajax CRUD'],
            ['id'=>3, 'title'=>'Laravel CORS Middleware'],
        ];
  
        $data = $this->paginate($myArray);
        return response()->json([
            'data' => ProcesstonClient::generateDataTableData([
                [
                    'value' => 'title',
                    'key' => 'Title'
                ]
            ],$data)
        ]);
    }

    public function paginate($items, $perPage = 5, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }

    
}
