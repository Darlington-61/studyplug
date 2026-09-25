import { LessonNote } from '../masterLessonNotes';

export const ACCOUNTING_NOTES: LessonNote[] = [
  {
    id: 1985,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Introduction To Accounting',
    summary_60s: 'Table of Contents Nature of Accounting Bookkeeping vs. Financial Accounting Users of Financial Information Types of Organizations (For-Profit and Non-Profit) Fundamental Accounting Concepts Business Transactions The Accounting Equation Analysis of Transactions Using the Equation ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Introduction To Accounting in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<h2><strong>Table of Contents</strong></h2>
<ol>
<li>Nature of Accounting</li>
<li>Bookkeeping vs. Financial Accounting</li>
<li>Users of Financial Information</li>
<li>Types of Organizations (For-Profit and Non-Profit)</li>
<li>Fundamental Accounting Concepts</li>
<li>Business Transactions</li>
<li>The Accounting Equation</li>
<li>Analysis of Transactions Using the Equation</li>
<li>Financial Statements</li>
</ol>
<h1 style="text-align:center"><strong>Nature of Accounting</strong></h1>
<p><strong>Accounting</strong> is the process of <strong>identifying, measuring, recording, classifying, summarizing, analyzing, interpreting, and communicating</strong> financial information about an entity to users for informed decision-making.</p>
<p>Accounting is a field of study with its own <strong>principles, standards, and procedures</strong>.</p>
<ul>
<li><strong>Accounting principles</strong> are the general rules that guide the accounting process.</li>
<li><strong>Accounting standards</strong> are the specific rules that must be followed when preparing financial statements.</li>
<li><strong>Accounting procedures</strong> are the steps followed to record, classify, summarize, analyze, and interpret financial transactions.</li>
</ul>
<p><strong>Mnemonic: IMRCSAIC</strong> ("I Measure Records, Classify, Summarise, Analyse, Interpret, Communicate"): the eight stages of the accounting process.</p>
<h1 style="text-align:center"><strong>Book-keeping vs Financial Accounting</strong></h1>
<p>Bookkeeping and financial accounting are linked but distinct. Both record financial transactions and both rely on the <strong>double-entry system</strong> (every transaction has equal debit and credit effects). The difference lies in scope and skill.</p>
<table border="1" style="width:400px">
<thead>
<tr>
<th scope="col">Feature</th>
<th scope="col">Bookkeeping</th>
<th scope="col">Financial Accounting</th>
</tr>
</thead>
<tbody>
<tr>
<td>Focus</td>
<td>Day-to-day recording of transactions</td>
<td>Classification, summary, analysis, interpretation</td>
</tr>
<tr>
<td>Skill required</td>
<td>Routine, clerical, data entry</td>
<td>Analytical, interpretative</td>
</tr>
<tr>
<td>Output</td>
<td>Books of original entry, ledgers</td>
<td>Financial statements</td>
</tr>
<tr>
<td>Regulation</td>
<td>Internal procedures</td>
<td>Must comply with accounting standards (IFRS/IAS)</td>
</tr>
<tr>
<td>Position in process</td>
<td>Earlier stage</td>
<td>Later stage; uses bookkeeping output as input</td>
</tr>
</tbody>
</table>
<h2 style="text-align:center"><strong>Role of Accounting In Economic Decision-Making</strong></h2>
<p>Accounting information is used in making several economic decisions, including:</p>
<p><strong>1. Investment Decisions</strong></p>
<p>Investors use accounting information to assess the <strong>financial soundness</strong> of a business before investing.</p>
<p><strong>2. Financing Decisions</strong></p>
<p>Businesses use accounting information to determine how to <strong>finance their operations</strong>.</p>
<p><strong>3. Operating Decisions</strong></p>
<p>Managers use accounting information to make decisions about <strong>pricing, production, budgeting, and marketing</strong>.</p>
<h1 style="text-align:center"><strong>Financial Accounting</strong></h1>
<p><strong>Financial accounting</strong> is the process of <strong>recording, classifying, and summarizing</strong> a company’s financial transactions in order to provide information about its <strong>financial performance and financial position</strong>.</p>
<p>This information is used by different stakeholders such as:</p>
<ul>
<li>Investors</li>
<li>Creditors</li>
<li>Regulators</li>
<li>Managers</li>
</ul>
<h2 style="text-align:center">Importance of Financial Accounting</h2>
<p>Financial accounting is important because it provides a <strong>standardized and reliable basis</strong> for measuring the financial performance and position of a business. This information is necessary for:</p>
<ul>
<li>Investment decisions</li>
<li>Lending decisions</li>
<li>Regulatory purposes</li>
<li>Internal planning and control</li>
</ul>
<h1 style="text-align:center"><strong>Users of Financial Accounting Information</strong></h1>
<p>Users of financial accounting information are broadly divided into <strong>internal users</strong> and <strong>external users</strong>.</p>
<h2>Internal Users</h2>
<p>These are people within the organization who use accounting information for decision-making.</p>
<p>Managers</p>
<p>Managers use financial accounting information to:</p>
<ul>
<li>Monitor progress toward organizational goals</li>
<li>Prepare budgets and forecasts</li>
<li>Evaluate departmental performance</li>
</ul>
<p>Employees</p>
<p>Employees use financial accounting information to understand the <strong>financial health</strong> of the business and make employment-related decisions.</p>
<h2>External Users</h2>
<p>These are persons outside the organization who have an interest in its financial performance.</p>
<p>Investors</p>
<p>Investors use financial accounting information to decide whether to invest in a business. They are interested in:</p>
<ul>
<li>Profitability</li>
<li>Liquidity</li>
<li>Solvency</li>
</ul>
<p>Creditors</p>
<p>Creditors use accounting information to determine whether a business can <strong>repay its debts</strong>.</p>
<p>Regulators</p>
<p>Regulators use accounting information to ensure compliance with <strong>accounting standards and legal requirements</strong>.</p>
<p>Financial Analysts</p>
<p>Financial analysts use accounting information to provide <strong>research, evaluation, and recommendations</strong> to investors and other users.</p>
<h1 style="text-align:center"><strong>Financial Statements</strong></h1>
<p>The major outputs of the financial accounting process are <strong>financial statements</strong>. The main financial statements are:</p>
<h2>1. Statement of Financial Position (Balance Sheet)</h2>
<p>The <strong>balance sheet</strong> shows the company’s:</p>
<ul>
<li>Assets</li>
<li>Liabilities</li>
<li>Equity</li>
</ul>
<p>at a specific point in time.</p>
<h2>2. Income Statement</h2>
<p>The <strong>income statement</strong> shows the company’s:</p>
<ul>
<li>Revenues</li>
<li>Expenses</li>
<li>Profit or loss</li>
</ul>
<p>for a given accounting period.</p>
<h2>3. Cash Flow Statement</h2>
<p>The <strong>cash flow statement</strong> shows the:</p>
<ul>
<li>Inflows of cash</li>
<li>Outflows of cash</li>
</ul>
<p>during an accounting period.</p>
<h2>4. Statement of Owner’s Equity</h2>
<p>The <strong>statement of owner’s equity</strong> shows the changes in the owner’s equity over a period of time.</p>
<p>Financial accounting is an important area of study because it helps users understand how businesses operate and make informed financial decisions.</p>
<h1 style="text-align:center"><strong>Types of Profit and Non-Profit-Making Organizations</strong></h1>
<h2>For-Profit Organizations</h2>
<p><strong>For-profit organizations</strong> are businesses established to make profit for their owners or shareholders. They earn profit by selling goods or services at prices higher than the cost of production or provision.</p>
<p>Main Types of For-Profit Organizations</p>
<p>1. Sole Proprietorship</p>
<p>A <strong>sole proprietorship</strong> is a business owned by one person. The owner is personally liable for all the debts and obligations of the business.</p>
<p>2. Partnership</p>
<p>A <strong>partnership</strong> is a business owned by two or more persons. The partners are personally liable for the debts and obligations of the business, unless otherwise stated by law.</p>
<p>3. Corporation</p>
<p>A <strong>corporation</strong> is a business entity separate from its owners. The owners are called <strong>shareholders</strong>. Shareholders are not personally liable for the debts of the corporation beyond their investment.</p>
<p>4. Limited Liability Company (LLC)</p>
<p>A <strong>Limited Liability Company (LLC)</strong> is a hybrid business structure that combines some features of a corporation and a partnership. The owners are called <strong>members</strong>, and they usually enjoy limited liability.</p>
<h2>Non-Profit Organizations</h2>
<p><strong>Non-profit organizations</strong> are organizations established primarily to serve the <strong>public good</strong> rather than to make profit.</p>
<p>They may be funded through:</p>
<ul>
<li>Donations</li>
<li>Grants</li>
<li>Government support</li>
<li>Membership contributions</li>
</ul>
<p>Types of Non-Profit Organizations</p>
<ul>
<li><strong>Charities</strong></li>
<li><strong>Educational institutions</strong></li>
<li><strong>Hospitals</strong></li>
<li><strong>Religious organizations</strong></li>
<li><strong>Professional organizations</strong></li>
</ul>
<h2>Difference Between For-Profit and Non-Profit Organizations</h2>
<p>The main difference lies in their <strong>objectives</strong>:</p>
<ul>
<li><strong>For-profit organizations</strong> exist to make profit.</li>
<li><strong>Non-profit organizations</strong> exist to provide services or promote public welfare.</li>
</ul>
<p>This difference affects:</p>
<ul>
<li>Their management</li>
<li>Their financing</li>
<li>Their use of surplus</li>
<li>Their governance structure</li>
</ul>
<p>For-profit organizations are usually more focused on <strong>profitability and efficiency</strong>, while non-profit organizations focus mainly on achieving their <strong>mission and objectives</strong>.</p>
<h1 style="text-align:center">Fundamental Accounting Concepts</h1>
<p><strong>Accounting concepts</strong> are the basic principles that guide the recording and reporting of financial transactions. They help to ensure that financial statements are <strong>reliable, consistent, and understandable</strong>.</p>
<h2>Major Accounting Concepts</h2>
<p>1. Entity Concept</p>
<p>The <strong>entity concept</strong> states that a business is separate from its owners. Therefore, only the transactions relating to the business should be recorded in the books of the business.</p>
<p>2. Duality Concept</p>
<p>The <strong>duality concept</strong> states that every transaction has two equal and opposite effects. This forms the basis of the <strong>double-entry system</strong>.</p>
<p>3. Going Concern Assumption</p>
<p>The <strong>going concern assumption</strong> states that a business will continue to operate for the foreseeable future. Because of this, assets are normally recorded at <strong>historical cost</strong> rather than liquidation value.</p>
<p>4. Objectivity Concept</p>
<p>The <strong>objectivity concept</strong> states that accounting records and financial statements should be based on <strong>verifiable evidence</strong> such as invoices, receipts, and vouchers.</p>
<p>5. Matching Concept</p>
<p>The <strong>matching concept</strong> states that expenses should be matched with the revenues they help to generate in the same accounting period.</p>
<p>6. Prudence Concept</p>
<p>The <strong>prudence concept</strong> requires accountants to exercise caution in recognizing income and expenses. Revenue should not be overstated, and expenses should not be understated.</p>
<p>7. Realization Concept</p>
<p>The <strong>realization concept</strong> states that revenue should be recognized when it is <strong>earned</strong>, not necessarily when cash is received.</p>
<p>8. Accrual Concept</p>
<p>The <strong>accrual concept</strong> states that expenses should be recognized when they are <strong>incurred</strong>, not necessarily when they are paid.</p>
<h1 style="text-align:center">Business Transactions</h1>
<p>A <strong>business transaction</strong> is any event that affects the financial position of a business and can be measured in monetary terms.</p>
<h2>Types of Business Transactions</h2>
<p>1. Operating Transactions</p>
<p>These are day-to-day transactions arising from normal business activities.</p>
<p>Examples:</p>
<ul>
<li>Sale of goods or services</li>
<li>Purchase of inventory</li>
<li>Payment of wages and salaries</li>
</ul>
<p>2. Non-Operating Transactions</p>
<p>These are transactions not directly related to the normal operations of the business.</p>
<p>Examples:</p>
<ul>
<li>Sale of a non-current asset</li>
<li>Borrowing money</li>
<li>Issuing shares</li>
</ul>
<h1 style="text-align:center">Accounting Equation</h1>
<p>The <strong>accounting equation</strong> is the basic formula used to show the relationship between a business’s resources and the claims against those resources.</p>
<h2>Basic Accounting Equation</h2>
<p><strong>Assets = Liabilities + Equity</strong></p>
<p>Assets</p>
<p><strong>Assets</strong> are resources owned or controlled by a business that have future economic value.</p>
<p>Examples:</p>
<ul>
<li>Cash</li>
<li>Inventory</li>
<li>Property</li>
<li>Equipment</li>
<li>Accounts receivable</li>
</ul>
<p>Liabilities</p>
<p><strong>Liabilities</strong> are debts or obligations owed by a business to outsiders.</p>
<p>Examples:</p>
<ul>
<li>Accounts payable</li>
<li>Notes payable</li>
<li>Bonds payable</li>
</ul>
<p>Equity</p>
<p><strong>Equity</strong> is the owner’s interest in the business after deducting liabilities from assets.</p>
<ul>
<li>In a <strong>sole proprietorship</strong>, equity is represented by the <strong>owner’s capital</strong>.</li>
<li>In a <strong>partnership</strong>, equity is represented by the <strong>partners’ capital accounts</strong>.</li>
<li>In a <strong>corporation</strong>, equity is represented by <strong>share capital and reserves</strong>.</li>
</ul>
<p>The accounting equation must always remain in balance.</p>
<h1 style="text-align:center">Analysis of Transactions in the Context of the Accounting Equation</h1>
<p>The accounting equation is the foundation of accounting because every business transaction affects at least two items in the equation while keeping it balanced.</p>
<h2>Components of the Accounting Equation</h2>
<p>Assets</p>
<p>Resources owned by the company with future economic value.</p>
<p>Liabilities</p>
<p>Amounts owed to creditors.</p>
<p>Stockholders’ Equity</p>
<p>The ownership interest of shareholders in a company. It is equal to:</p>
<p><strong>Stockholders’ Equity = Assets - Liabilities</strong></p>
<h2>Manipulation of the Basic Accounting Equation</h2>
<p>The accounting equation can be rearranged as follows:</p>
<ul>
<li><strong>Assets = Liabilities + Stockholders’ Equity</strong></li>
<li><strong>Liabilities = Assets - Stockholders’ Equity</strong></li>
<li><strong>Stockholders’ Equity = Assets - Liabilities</strong></li>
</ul>
<p>These forms help in analyzing the financial condition of a business.</p>
<h2>Illustration of the Effect of a Transaction</h2>
<p>When a company purchases equipment for cash:</p>
<ul>
<li><strong>Equipment (asset) increases</strong></li>
<li><strong>Cash (asset) decreases</strong></li>
</ul>
<p>The accounting equation remains balanced because one asset increases while another asset decreases by the same amount.</p>
<h2>Importance of the Accounting Equation</h2>
<p>The accounting equation is important because it helps to:</p>
<ul>
<li>Show the relationship between assets, liabilities, and equity</li>
<li>Analyze the financial health of a business</li>
<li>Ensure the accuracy of accounting records</li>
<li>Support the preparation of financial statements</li>
<li>Track changes in the financial position of a company over time</li>
</ul>
<h1 style="text-align:center">IAS 16 – Property, Plant and Equipment</h1>
<p><strong>IAS 16 – Property, Plant and Equipment</strong> prescribes the accounting treatment for <strong>property, plant, and equipment (PPE)</strong>.</p>
<p><strong>Property, plant, and equipment</strong> are <strong>tangible assets</strong> that:</p>
<ul>
<li>Are held for use in the production or supply of goods or services, for rental to others, or for administrative purposes; and</li>
<li>Are expected to be used during more than one accounting period.</li>
</ul>
<h2>Recognition</h2>
<p>An item of <strong>property, plant, and equipment</strong> is recognized at <strong>cost</strong> if it is probable that future economic benefits associated with the item will flow to the entity and the cost of the item can be measured reliably.</p>
<p>The cost of PPE includes:</p>
<ul>
<li>Purchase price</li>
<li>Direct labour</li>
<li>Other directly attributable costs necessary to bring the asset to the location and condition required for its intended use</li>
</ul>
<h2 style="text-align:center"><strong>Subsequent Measurement</strong></h2>
<p>After initial recognition, an entity may choose either of the following models:</p>
<p><strong>1. Cost Model</strong></p>
<p>Under the cost model, PPE is carried at:</p>
<p><strong>Cost less accumulated depreciation and accumulated impairment losses</strong></p>
<p><strong>2. Revaluation Model</strong></p>
<p>Under the revaluation model, PPE is carried at:</p>
<p>Revalued amount, being fair value at the date of revaluation less subsequent accumulated depreciation and subsequent accumulated impairment losses</p>
<h2 style="text-align:center"><strong>Depreciation</strong></h2>
<p><strong>Depreciation</strong> is the systematic allocation of the <strong>depreciable amount</strong> of an asset over its <strong>useful life</strong>.</p>
<p>Common methods of depreciation include:</p>
<ul>
<li>Straight-line method</li>
<li>Reducing balance method</li>
<li>Units of production method</li>
</ul>
<h2 style="text-align:center"><strong>Revaluation</strong></h2>
<p>Where the <strong>revaluation model</strong> is used:</p>
<ul>
<li>It must be applied to the <strong>entire class of assets</strong></li>
<li>Revaluations must be performed with sufficient regularity to ensure that the carrying amount does not differ materially from fair value</li>
</ul>
<h2 style="text-align:center"><strong>Impairment</strong></h2>
<p>If there is an indication that an asset may be impaired, the entity should assess whether the <strong>carrying amount</strong> of the asset exceeds its <strong>recoverable amount</strong>.</p>
<h2 style="text-align:center"><strong>Disposal</strong></h2>
<p>When an item of PPE is disposed of, any <strong>gain or loss on disposal</strong> should be recognized in <strong>profit or loss</strong>.</p>
<h2 style="text-align:center"><strong>Disclosure</strong></h2>
<p>Required disclosures include:</p>
<ul>
<li>The measurement bases used</li>
<li>The depreciation methods adopted</li>
<li>The useful lives or depreciation rates used</li>
<li>The carrying amount of each class of PPE</li>
<li>Any restrictions on title</li>
<li>Any impairment losses recognized</li>
</ul>`
  },
  {
    id: 1986,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Introduction To IASB',
    summary_60s: 'Introduction to the Structure of the International Accounting Standards Board (IASB) Structure of the IASB. IASB conceptual framework. International Accounting Standards (IAS) and International Financial Reporting Standards (IFRS). Basis of Accounting Basis of accounting refers t',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Introduction To IASB in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>Introduction to the Structure of the International Accounting Standards Board (IASB)</strong></p>
<p>Structure of the IASB. IASB conceptual framework. International Accounting Standards (IAS) and International Financial Reporting Standards (IFRS).</p>
<h1 style="text-align:center"><strong>Basis of Accounting</strong></h1>
<p><strong>Basis of accounting</strong> refers to the principles, guidelines, and rules that govern the preparation and presentation of financial statements.</p>
<p>Types of Basis of Accounting</p>
<p>1. Cash Basis</p>
<p>Under the <strong>cash basis</strong>, transactions are recorded <strong>when cash is received or paid</strong>.</p>
<p>Features:</p>
<ul>
<li>Simple to apply</li>
<li>Suitable for small businesses</li>
<li>Does not always give a complete picture of financial performance</li>
</ul>
<p>2. Accrual Basis</p>
<p>Under the <strong>accrual basis</strong>, transactions are recorded <strong>when they occur, regardless of cash flow</strong>.</p>
<p>Features:</p>
<ul>
<li>Provides a more accurate representation of financial performance</li>
<li>Recognizes income when earned and expenses when incurred</li>
<li>Commonly used in financial reporting</li>
</ul>
<p>3. Modified Cash Basis</p>
<p>The <strong>modified cash basis</strong> combines elements of both <strong>cash basis</strong> and <strong>accrual basis</strong> accounting.</p>
<p>Features:</p>
<ul>
<li>Retains the simplicity of the cash basis</li>
<li>Includes selected accrual adjustments</li>
<li>Commonly used in some areas of government accounting</li>
</ul>
<h1 style="text-align:center"><strong> IASB</strong></h1>
<p>The <strong>International Accounting Standards Board (IASB)</strong> is an independent international body responsible for developing and approving <strong>International Financial Reporting Standards (IFRS)</strong>.</p>
<p>Its main role is to promote <strong>consistency, transparency, and comparability</strong> in financial reporting across the world.</p>
<h2 style="text-align:center">Structure of the IASB</h2>
<p>1. IFRS Foundation</p>
<p>The <strong>IFRS Foundation</strong> oversees the operations of the IASB.</p>
<p>Its functions include:</p>
<ul>
<li>Providing overall supervision</li>
<li>Appointing members of the IASB</li>
<li>Ensuring the independence and effectiveness of the standard-setting process</li>
</ul>
<p>2. IASB Board</p>
<p>The <strong>IASB Board</strong> is responsible for the development and issuance of <strong>IFRS</strong>.</p>
<p>Features:</p>
<ul>
<li>Composed of members with diverse professional backgrounds and expertise</li>
<li>Develops accounting standards for global use</li>
</ul>
<p>3. IFRS Advisory Council</p>
<p>The <strong>IFRS Advisory Council</strong> provides advice and feedback to the IASB on its standard-setting activities.</p>
<p>It represents a wide range of stakeholders, including:</p>
<ul>
<li>Investors</li>
<li>Preparers</li>
<li>Auditors</li>
<li>Regulators</li>
<li>Academics</li>
</ul>
<p>4. International Financial Reporting Interpretations Committee (IFRIC)</p>
<p>The <strong>International Financial Reporting Interpretations Committee (IFRIC)</strong> assists the IASB by issuing interpretations and guidance on the application of IFRS.</p>
<p>5. Standards Advisory Council (SAC)</p>
<p>The <strong>Standards Advisory Council (SAC)</strong> advises the IASB on agenda decisions and priorities.</p>
<h2 style="text-align:center">IFRS Adoption</h2>
<p><strong>IFRS</strong> has been adopted in many countries around the world. Its adoption promotes:</p>
<ul>
<li>Consistency in financial reporting</li>
<li>Comparability of financial statements</li>
<li>Greater transparency in global business reporting</li>
</ul>
<h2 style="text-align:center">Benefits of IFRS</h2>
<p><strong>1. Global Comparisons</strong></p>
<p>IFRS makes it easier to compare financial statements across countries and industries.</p>
<p><strong>2. Investor Confidence</strong></p>
<p>The use of internationally recognized standards increases confidence in financial statements and supports investment decisions.</p>
<p><strong>3. Reduced Complexity</strong></p>
<p>IFRS aims to improve uniformity in accounting practice and reduce unnecessary differences in financial reporting.</p>
<h2 style="text-align:center"><strong>Challenges of IFRS Adoption</strong></h2>
<p>1. Implementation Costs</p>
<p>Organizations may incur costs in training staff, updating systems, and adjusting reporting processes during adoption.</p>
<p>2. Differing Legal Systems</p>
<p>The application of IFRS may be affected by differences in legal and regulatory systems across countries.</p>
<h2>Conclusion</h2>
<p>Understanding the <strong>basis of accounting</strong> and the <strong>structure of the IASB</strong> is important for preparing and interpreting financial statements in a global environment. It helps ensure transparent, reliable, and comparable financial reporting.</p>
<h1 style="text-align:center"><strong>IASB Conceptual Framework</strong></h1>
<p>The <strong>IASB Conceptual Framework</strong> is a fundamental document that provides the foundation for the development of <strong>International Financial Reporting Standards (IFRS)</strong>.</p>
<p>It sets out the concepts and principles that guide the IASB in its standard-setting activities.</p>
<h2>1. Objective of Financial Reporting</h2>
<p>The primary objective of financial reporting is to provide <strong>financial information that is useful for decision-making</strong>.</p>
<p>This information helps users such as:</p>
<ul>
<li>Investors</li>
<li>Creditors</li>
<li>Other stakeholders</li>
</ul>
<p>make informed economic decisions.</p>
<h2>2. Qualitative Characteristics of Financial Information</h2>
<p>The framework identifies two <strong>fundamental qualitative characteristics</strong> of useful financial information:</p>
<p>Relevance</p>
<p>Financial information is <strong>relevant</strong> when it is capable of influencing decisions by having:</p>
<ul>
<li>Predictive value</li>
<li>Confirmatory value</li>
</ul>
<p>Faithful Representation</p>
<p>Financial information has <strong>faithful representation</strong> when it reflects the economic substance of transactions completely, neutrally, and free from error.</p>
<h2>3. Enhancing Qualitative Characteristics</h2>
<p>To improve the usefulness of financial information, the framework identifies four <strong>enhancing qualitative characteristics</strong>:</p>
<ul>
<li><strong>Comparability</strong></li>
<li><strong>Verifiability</strong></li>
<li><strong>Timeliness</strong></li>
<li><strong>Understandability</strong></li>
</ul>
<p>These characteristics increase the usefulness of financial reports to users.</p>
<h2>4. Elements of Financial Statements</h2>
<p>The IASB Conceptual Framework identifies the major elements of financial statements as:</p>
<ul>
<li><strong>Assets</strong></li>
<li><strong>Liabilities</strong></li>
<li><strong>Equity</strong></li>
<li><strong>Income</strong></li>
<li><strong>Expenses</strong></li>
</ul>
<p>These elements form the basis for reporting an entity’s financial position and performance.</p>
<h2>5. Recognition and Measurement</h2>
<p>This section explains when items should be included in financial statements and how they should be measured.</p>
<p>Measurement bases include:</p>
<ul>
<li><strong>Historical cost</strong></li>
<li><strong>Fair value</strong></li>
<li>Other suitable measurement approaches</li>
</ul>
<p>Recognition and measurement should support the preparation of relevant and faithfully represented financial information.</p>
<h2>6. Concepts of Capital and Capital Maintenance</h2>
<p>The framework discusses:</p>
<ul>
<li><strong>Financial capital maintenance</strong></li>
<li><strong>Physical capital maintenance</strong></li>
</ul>
<p>These concepts help in understanding how profit is determined and how an entity preserves its capital over time.</p>
<h2>7. Constraints on Financial Reporting</h2>
<p>The framework recognizes that financial reporting is subject to practical constraints, especially <strong>cost-benefit considerations</strong>.</p>
<p>This means that the benefit of providing information should justify the cost of preparing and presenting it.</p>
<h1 style="text-align:center">IAS 1 – Preparation of Financial Statements</h1>
<p><strong>IAS 1</strong> deals with the <strong>preparation and presentation of financial statements</strong>. It provides guidance on the overall structure and minimum content of financial statements to ensure that useful information is presented to users.</p>
<h2>Key Elements of IAS 1</h2>
<p>1. Objective of Financial Statements</p>
<p>The objective of financial statements is to provide information about an entity’s:</p>
<ul>
<li>Financial position</li>
<li>Financial performance</li>
<li>Cash flows</li>
</ul>
<p>This information helps users in making economic decisions.</p>
<p>2. Underlying Assumptions</p>
<p>IAS 1 is based on key assumptions such as:</p>
<ul>
<li><strong>Accrual basis of accounting</strong></li>
<li><strong>Going concern</strong></li>
</ul>
<p>These assumptions ensure that financial statements reflect the economic reality of the business and assume continuity of operations.</p>
<p>3. Qualitative Characteristics</p>
<p>Financial statements should possess useful characteristics such as:</p>
<ul>
<li>Relevance</li>
<li>Faithful representation</li>
<li>Comparability</li>
<li>Understandability</li>
</ul>
<p>4. Elements of Financial Statements</p>
<p>IAS 1 presents financial statements using the following elements:</p>
<ul>
<li>Assets</li>
<li>Liabilities</li>
<li>Equity</li>
<li>Income</li>
<li>Expenses</li>
</ul>
<p>5. Structure of Financial Statements</p>
<p>IAS 1 outlines the main components of a complete set of financial statements, including:</p>
<ul>
<li><strong>Statement of financial position</strong></li>
<li><strong>Statement of profit or loss and other comprehensive income</strong></li>
<li><strong>Statement of changes in equity</strong></li>
<li><strong>Statement of cash flows</strong></li>
<li><strong>Notes to the financial statements</strong></li>
</ul>
<h1 style="text-align:center">IAS 2 – Inventory: Using FIFO and Weighted Average</h1>
<p><strong>IAS 2</strong> deals with the accounting treatment of <strong>inventories</strong>. It requires inventories to be measured using appropriate and consistent valuation methods so that financial statements present reliable information.</p>
<p>Two commonly used cost formulas are:</p>
<ul>
<li><strong>FIFO (First-In-First-Out)</strong></li>
<li><strong>Weighted Average</strong></li>
</ul>
<h2>FIFO (First-In-First-Out)</h2>
<p>Principle</p>
<p><strong>FIFO</strong> assumes that the first items purchased or produced are the first items sold or used.</p>
<p>This method often reflects the normal physical flow of inventory, especially where goods are perishable or have a limited shelf life.</p>
<p>Calculation</p>
<p>Under FIFO:</p>
<ul>
<li>The cost of the <strong>oldest inventory</strong> is assigned first to the cost of goods sold</li>
<li>The cost of the <strong>newer inventory</strong> remains in closing inventory</li>
</ul>
<p>Advantages</p>
<ul>
<li>Often reflects the actual flow of goods</li>
<li>Closing inventory may reflect more recent costs</li>
</ul>
<h2>Weighted Average</h2>
<p>Principle</p>
<p>The <strong>Weighted Average</strong> method determines inventory cost by dividing the <strong>total cost of goods available for sale</strong> by the <strong>total number of units available for sale</strong>.</p>
<p>Calculation</p>
<p>The formula is:</p>
<p><strong>Weighted Average Cost per Unit = Total Cost of Goods Available for Sale ÷ Total Units Available for Sale</strong></p>
<p>This average cost per unit is then used to value:</p>
<ul>
<li>Units sold</li>
<li>Units remaining in inventory</li>
</ul>
<p>Advantages</p>
<ul>
<li>Simple to apply where inventory items are interchangeable</li>
<li>Smoothes out fluctuations in cost</li>
</ul>`
  },
  {
    id: 1987,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Bookkeeping & Trial Balance',
    summary_60s: 'Basic Steps Involved in Bookkeeping up to the Trial Balance Source documents and information contained in source documents. Subsidiary books. Principal books of accounts, especially ledgers. Types and classification of accounts. Introduction Accounting is a systematic process of ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Bookkeeping & Trial Balance in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>Basic Steps Involved in Bookkeeping up to the Trial Balance</strong></p>
<p>Source documents and information contained in source documents. Subsidiary books. Principal books of accounts, especially ledgers. Types and classification of accounts.</p>
<h2 style="text-align:center"><strong>Introduction</strong></h2>
<p>Accounting is a <strong>systematic process of identifying, recording, summarizing, and analyzing financial transactions</strong> of a business or organization.</p>
<p>The <strong>basis of accounting</strong> refers to the <strong>principles and rules that determine how and when financial transactions are recorded and reported in the financial statements</strong>.</p>
<p>The choice of accounting basis provides the <strong>foundation for preparing financial statements</strong> and helps ensure <strong>consistency, reliability, and comparability</strong> in financial reporting.</p>
<h1 style="text-align:center">Cash Basis and Accrual Basis of Accounting</h1>
<p>The two major bases of accounting used in financial reporting are:</p>
<ul>
<li><strong>Cash Basis</strong></li>
<li><strong>Accrual Basis</strong></li>
</ul>
<h2>1. Cash Basis of Accounting</h2>
<p>Under the <strong>cash basis of accounting</strong>, transactions are recorded <strong>only when cash is received or paid</strong>.</p>
<p>Features</p>
<ul>
<li>Revenue is recorded when <strong>cash is received</strong>.</li>
<li>Expenses are recorded when <strong>cash is paid</strong>.</li>
<li>The method is <strong>simple and easy to apply</strong>.</li>
</ul>
<p>Limitation</p>
<p>Although simple, the cash basis may <strong>not provide a complete or accurate picture of a company's financial position and performance</strong>, because transactions are recorded only when cash moves.</p>
<h2>2. Accrual Basis of Accounting</h2>
<p>Under the <strong>accrual basis of accounting</strong>, transactions are recorded <strong>when they occur</strong>, regardless of when cash is received or paid.</p>
<p>Features</p>
<ul>
<li>Revenue is recognized when it is <strong>earned</strong>.</li>
<li>Expenses are recognized when they are <strong>incurred</strong>.</li>
<li>Provides a <strong>more accurate representation of financial activities</strong>.</li>
</ul>
<p>Relationship with Matching Principle</p>
<p>The accrual basis follows the <strong>matching principle</strong>, which requires that <strong>revenues be matched with the expenses incurred in generating them during the same accounting period</strong>.</p>
<h1 style="text-align:center">Principles of Accounting</h1>
<p>Several fundamental principles guide the preparation of financial statements.</p>
<h2>1. Revenue Recognition Principle</h2>
<p>The <strong>revenue recognition principle</strong> states that <strong>revenue should be recognized when it is earned and realizable</strong>, regardless of when cash is received.</p>
<h2>2. Matching Principle</h2>
<p>The <strong>matching principle</strong> requires that <strong>expenses be recorded in the same accounting period as the revenues they help generate</strong>.</p>
<p>This ensures that profit for a period is measured accurately.</p>
<h2>3. Consistency Principle</h2>
<p>The <strong>consistency principle</strong> requires that <strong>accounting methods and procedures be applied consistently from one accounting period to another</strong>.</p>
<p>This allows users of financial statements to <strong>compare financial performance over time</strong>.</p>
<h2>4. Historical Cost Principle</h2>
<p>The <strong>historical cost principle</strong> requires that <strong>assets be recorded at their original purchase cost</strong>.</p>
<p>This provides a <strong>reliable and verifiable basis</strong> for recording assets.</p>
<h1 style="text-align:center">Modifying Bases and Assumptions in Accounting</h1>
<p>Certain assumptions modify or support the basis of accounting used in financial reporting.</p>
<h2>1. Going Concern Assumption</h2>
<p>The <strong>going concern assumption</strong> assumes that a business will <strong>continue operating in the foreseeable future</strong> unless there is evidence to the contrary.</p>
<p>Because of this assumption, assets are normally recorded at <strong>historical cost rather than liquidation value</strong>.</p>
<h2>2. Conservatism Principle</h2>
<p>The <strong>conservatism principle</strong> encourages accountants to adopt a <strong>cautious approach</strong> when preparing financial statements.</p>
<ul>
<li><strong>Losses should be recognized as soon as they are probable</strong></li>
<li><strong>Gains should not be recognized until they are realized</strong></li>
</ul>
<h1 style="text-align:center">Specialized Bases of Accounting</h1>
<p>In some situations, alternative accounting bases may be used.</p>
<h2>1. Inflation Accounting</h2>
<p><strong>Inflation accounting</strong> adjusts financial statements to reflect the <strong>effects of inflation</strong>, providing a more realistic representation of the financial position of an entity.</p>
<h2>2. Tax Basis Accounting</h2>
<p>Under <strong>tax basis accounting</strong>, financial statements are prepared according to <strong>tax regulations</strong> rather than general accounting standards.</p>
<p>This basis is commonly used for <strong>tax reporting purposes</strong>.</p>
<h2>Conclusion</h2>
<p>A clear understanding of the <strong>basis of accounting</strong> is essential for preparing accurate and reliable financial statements. Whether using the <strong>cash basis</strong> or the <strong>accrual basis</strong>, adherence to accounting principles ensures <strong>transparency, reliability, and comparability</strong> in financial reporting.</p>
<h1 style="text-align:center">Basic Steps Involved in Bookkeeping</h1>
<h2>Importance of Source Documents in Accounting</h2>
<p><strong>Source documents</strong> form the <strong>foundation of bookkeeping</strong> because they provide evidence that supports financial transactions recorded in the accounting system.</p>
<p>Every business transaction should be supported by an appropriate source document.</p>
<p>Examples of Source Documents</p>
<p>Common source documents include:</p>
<ul>
<li>Receipts</li>
<li>Invoices</li>
<li>Vouchers</li>
<li>Debit notes</li>
<li>Credit notes</li>
<li>Paying-in slips (bank tellers)</li>
<li>Cheques and cheque stubs</li>
<li>Dividend warrants</li>
</ul>
<p>These documents should be <strong>properly stored and preserved</strong> for future reference and auditing purposes.</p>
<h1 style="text-align:center">Recording Transactions Using Source Documents</h1>
<p>When a transaction occurs, it should be <strong>recorded promptly using the relevant source document</strong>.</p>
<p>A typical source document usually contains the following information:</p>
<ul>
<li><strong>Date of the transaction</strong></li>
<li><strong>Name of the other party involved</strong></li>
<li><strong>Amount of the transaction</strong></li>
<li><strong>Brief description of the transaction</strong></li>
</ul>
<p>Proper documentation ensures <strong>accuracy and reliability in accounting records</strong>.</p>
<h1 style="text-align:center">Subsidiary Books</h1>
<p><strong>Subsidiary books</strong> (also called <strong>books of original entry</strong>) are used to record transactions in detail before they are transferred to the <strong>general ledger</strong>.</p>
<p>They help to simplify accounting work by grouping similar transactions together.</p>
<h2>Common Subsidiary Books</h2>
<p>1. Purchases Day Book</p>
<p>Records all <strong>credit purchases of goods and services</strong>.</p>
<p>2. Sales Day Book</p>
<p>Records all <strong>credit sales of goods and services</strong>.</p>
<p>3. Sales Returns Day Book (Returns Inwards Book)</p>
<p>Records all <strong>goods returned by customers that were previously sold on credit</strong>.</p>
<p>4. Purchases Returns Day Book (Returns Outwards Book)</p>
<p>Records all <strong>goods returned to suppliers that were originally purchased on credit</strong>.</p>
<p>5. Journal Proper (General Journal or Principal Book)</p>
<p>Records transactions that <strong>cannot be recorded in any other subsidiary book</strong>.</p>
<p>Examples include:</p>
<ul>
<li>Opening entries</li>
<li>Correction of errors</li>
<li>Transfer entries</li>
<li>Adjustments</li>
</ul>
<h1 style="text-align:center">The Trial Balance</h1>
<p>The <strong>trial balance</strong> is a list of all the accounts in the <strong>general ledger</strong>, showing their <strong>debit balances and credit balances</strong> at a particular date.</p>
<p>Purpose of a Trial Balance</p>
<p>The trial balance is prepared to ensure that:</p>
<ul>
<li><strong>Total debits equal total credits</strong></li>
<li>Ledger postings are mathematically accurate</li>
<li>Errors in recording or posting can be detected</li>
</ul>
<p>It is usually prepared <strong>at the end of an accounting period</strong>.</p>
<h1 style="text-align:center">Additional Guidelines for Effective Bookkeeping</h1>
<p>To maintain accurate accounting records, the following practices should be observed:</p>
<ul>
<li>Use a <strong>double-entry accounting system</strong>, where every transaction affects at least two accounts (one debit and one credit).</li>
<li>Keep accounting records <strong>up to date</strong>.</li>
<li><strong>Reconcile bank statements regularly</strong> to detect errors or discrepancies.</li>
<li><strong>Back up accounting records regularly</strong> to prevent data loss.</li>
</ul>`
  },
  {
    id: 1988,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Debit and Credit Entries',
    summary_60s: 'Debit and credit entries form the foundation of the double-entry accounting system . In this system: Every financial transaction affects at least two accounts . One account is debited , and another is credited . The total debits must always equal the total credits: Total Debits =',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Debit and Credit Entries in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>Debit and credit entries</strong> form the foundation of the <strong>double-entry accounting system</strong>.</p>
<p>In this system:</p>
<ul>
<li>
<p>Every financial transaction affects <strong>at least two accounts</strong>.</p>
</li>
<li>
<p>One account is <strong>debited</strong>, and another is <strong>credited</strong>.</p>
</li>
<li>
<p>The total debits must always equal the total credits:</p>
</li>
</ul>
<p>Total Debits = Total Credits</p>
<p>This ensures that the <strong>accounting equation</strong> remains balanced.</p>
<h2 style="text-align:center"><strong>Meaning of Debit and Credit</strong></h2>
<p>Debit</p>
<p>A <strong>debit (Dr)</strong> represents:</p>
<ul>
<li>
<p>an <strong>increase in assets</strong>, or</p>
</li>
<li>
<p>a <strong>decrease in liabilities or equity</strong>.</p>
</li>
</ul>
<p>Credit</p>
<p>A <strong>credit (Cr)</strong> represents:</p>
<ul>
<li>
<p>a <strong>decrease in assets</strong>, or</p>
</li>
<li>
<p>an <strong>increase in liabilities or equity</strong>.</p>
</li>
</ul>
<h2 style="text-align:center">Analysis of Transactions Before Posting</h2>
<p>Before recording any transaction in the <strong>general ledger</strong>, it is necessary to analyze it carefully.</p>
<p>Key Questions to Consider:</p>
<ul>
<li>
<p>What is the <strong>nature of the transaction</strong>?</p>
<p><em>(e.g., purchase, sale, payment of wages)</em></p>
</li>
<li>
<p>Which <strong>accounts are affected</strong>?</p>
</li>
<li>
<p>Which accounts are <strong>increased or decreased</strong>?</p>
</li>
</ul>
<p>This analysis helps determine the correct accounts to <strong>debit</strong> and <strong>credit</strong>.</p>
<h2 style="text-align:center">Elements of Financial Statements and Their Effect on Debit and Credit Entries</h2>
<p>The five main elements of financial statements are:</p>
<ul>
<li><strong>Assets</strong></li>
<li><strong>Liabilities</strong></li>
<li><strong>Equity</strong></li>
<li><strong>Revenue</strong></li>
<li><strong>Expenses</strong></li>
</ul>
<p>Their relationship with debit and credit entries is as follows:</p>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Element</th>
<th>Debit Effect</th>
<th>Credit Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td>Assets</td>
<td>Increase</td>
<td>Decrease</td>
</tr>
<tr>
<td>Liabilities</td>
<td>Decrease</td>
<td>Increase</td>
</tr>
<tr>
<td>Equity</td>
<td>Decrease</td>
<td>Increase</td>
</tr>
<tr>
<td>Revenue</td>
<td>Decrease</td>
<td>Increase</td>
</tr>
<tr>
<td>Expenses</td>
<td>Increase</td>
<td>Decrease</td>
</tr>
</tbody>
</table>
<h2 style="text-align:center"><strong>Balancing of Ledger Accounts</strong></h2>
<p>Each ledger account must have either a <strong>debit balance</strong> or a <strong>credit balance</strong>.</p>
<p>The balance of an account is determined as follows:</p>
<p>Balance=Total Debits−Total Credits\\text{Balance} = \\text{Total Debits} - \\text{Total Credits}Balance=Total Debits−Total Credits</p>
<ul>
<li>
<p>If debits exceed credits → <strong>Debit balance</strong></p>
</li>
<li>
<p>If credits exceed debits → <strong>Credit balance</strong></p>
</li>
</ul>
<h2 style="text-align:center"><strong>Preparation of Trial Balance</strong></h2>
<p>A <strong>trial balance</strong> is a statement that lists all ledger accounts along with their balances at a specific date.</p>
<p>Purpose:</p>
<ul>
<li>
<p>To verify that:</p>
</li>
</ul>
<p>Total Debit Balances = Total Credit Balances</p>
<ul>
<li>
<p>To detect possible errors in recording transactions.</p>
</li>
</ul>
<p>If the trial balance does <strong>not balance</strong>, it indicates that there are <strong>errors in the accounting records</strong> that must be investigated and corrected.</p>`
  },
  {
    id: 1989,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Accounting Errors and Corrections',
    summary_60s: 'In accounting, accuracy is essential for reliable financial reporting. One of the tools used to check arithmetic accuracy is the trial balance , which lists all ledger accounts and their debit and credit balances. A trial balance is prepared at the end of an accounting period to ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Accounting Errors and Corrections in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>In accounting, accuracy is essential for reliable financial reporting. One of the tools used to check arithmetic accuracy is the <strong>trial balance</strong>, which lists all ledger accounts and their debit and credit balances.</p>
<p>A trial balance is prepared at the end of an accounting period to verify that:</p>
<p><strong>Total Debit Balances = Total Credit Balances</strong></p>
<p>However, agreement of the trial balance does <strong>not</strong> guarantee that all accounting records are free from errors. Some errors do not affect the agreement of the trial balance, while others do.</p>
<h2 style="text-align:center"><strong>Limitations of the Trial Balance</strong></h2>
<p>Although the trial balance helps detect certain errors, it has the following limitations:</p>
<ul>
<li>
<p>It only checks <strong>arithmetical accuracy</strong>, not conceptual correctness.</p>
</li>
<li>
<p>It cannot detect errors where <strong>equal debits and credits</strong> are recorded incorrectly.</p>
</li>
<li>
<p>Some types of errors remain undetected even when the trial balance agrees.</p>
</li>
</ul>
<h2 style="text-align:center"><strong>Errors Not Affecting the Trial Balance</strong></h2>
<p>These are errors that <strong>do not prevent the trial balance from balancing</strong>.</p>
<p>1. Errors of Principle</p>
<p>These occur when a transaction is recorded in the <strong>wrong class of account</strong>, violating accounting principles.</p>
<ul>
<li>
<p>Example: Recording the purchase of machinery (a capital expenditure) as an expense.</p>
</li>
</ul>
<p>2. Complete Omission of a Transaction</p>
<p>A transaction is <strong>entirely omitted</strong> from the accounting records.</p>
<ul>
<li>
<p>Example: Cash received from a customer is not recorded at all.</p>
</li>
</ul>
<p>3. Error of Original Entry</p>
<p>The correct accounts are used, but the <strong>amount recorded is incorrect</strong>, and the same incorrect figure is posted to both debit and credit sides.</p>
<ul>
<li>
<p>Example: Recording ₦900 instead of ₦9,000 in both accounts.</p>
</li>
</ul>
<p>4. Error of Commission</p>
<p>This occurs when the correct amount is recorded, but in the <strong>wrong personal account</strong> of the same class.</p>
<ul>
<li>
<p>Example: Posting a transaction meant for one customer to another customer’s account.</p>
</li>
</ul>
<p>5. Complete Reversal of Entries</p>
<p>The correct amount is entered, but the <strong>debit and credit entries are reversed</strong>.</p>
<ul>
<li>
<p>Example: Debiting Sales Account and crediting Cash Account instead of the correct treatment.</p>
</li>
</ul>
<p>6. Compensating Errors</p>
<p>Two or more errors that <strong>cancel each other out</strong>, resulting in no difference in the trial balance totals.</p>
<ul>
<li>
<p>Example: An overstatement in one account is offset by an equal understatement in another account.</p>
</li>
</ul>
<h2 style="text-align:center"><strong>Errors Affecting the Agreement of the Trial Balance</strong></h2>
<p>These errors cause the <strong>trial balance not to balance</strong> and are usually easier to detect.</p>
<p>1. Casting Errors</p>
<p>Errors made when <strong>adding (casting)</strong> the figures in the trial balance or ledger accounts.</p>
<p>2. Transposition Errors</p>
<p>These occur when digits are <strong>incorrectly reversed</strong>.</p>
<ul>
<li>
<p>Example: Writing ₦321 as ₦312.</p>
</li>
</ul>
<p>3. Failure to Extract a Ledger Balance</p>
<p>An account balance is <strong>omitted</strong> from the trial balance.</p>
<p>4. Single Entry Error</p>
<p>A transaction is recorded on <strong>only one side</strong> (either debit or credit), instead of both.</p>
<p>5. Wrong Classification in Trial Balance</p>
<p>An account balance is placed on the <strong>wrong side</strong> (debit instead of credit or vice versa) in the trial balance.</p>
<h2 style="text-align:center"><strong>Identification and Correction of Errors</strong></h2>
<p>When errors are suspected, the following procedures can be used to detect and correct them:</p>
<p>1. Bank Reconciliation</p>
<p>Compare the <strong>cash book</strong> with the <strong>bank statement</strong> to identify discrepancies in cash transactions.</p>
<p>2. Review of Journal Entries</p>
<p>Carefully examine entries in the <strong>journal</strong> to ensure transactions were recorded correctly.</p>
<p>3. Comparison with the General Ledger</p>
<p>Check that all entries in the trial balance agree with the <strong>general ledger balances</strong>.</p>
<p>4. Use of Analytical Procedures</p>
<p>Compare financial data with:</p>
<ul>
<li>
<p>previous periods,</p>
</li>
<li>
<p>budgets, or</p>
</li>
<li>
<p>industry averages.</p>
</li>
</ul>
<p>Significant differences may indicate possible errors.</p>`
  },
  {
    id: 1990,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Bank Reconciliation Statement',
    summary_60s: 'A Bank Reconciliation Statement is prepared to explain the difference between the balance shown in the cash book (bank column) and the balance shown in the bank statement at a particular date. Differences often arise because transactions may be recorded in one set of records but ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Bank Reconciliation Statement in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>A <strong>Bank Reconciliation Statement</strong> is prepared to explain the difference between the balance shown in the <strong>cash book (bank column)</strong> and the balance shown in the <strong>bank statement</strong> at a particular date.</p>
<p>Differences often arise because transactions may be recorded in one set of records but not yet reflected in the other, or due to errors and timing delays.</p>
<h2 style="text-align:center"><strong>Bank Statement Vs Cash Book Balances</strong></h2>
<p>The differences between the two balances can be grouped into three main categories:</p>
<p>1. Transactions Recorded in Only One Set of Books</p>
<p>(a) Items Recorded in the Cash Book Only</p>
<p>These are transactions entered in the cash book but not yet reflected in the bank statement:</p>
<ul>
<li>
<p><strong>Cheques issued but not yet presented for payment</strong> (outstanding cheques).</p>
</li>
<li>
<p><strong>Cash or cheques received but not yet deposited</strong> into the bank.</p>
</li>
</ul>
<p>(b) Items Recorded in the Bank Statement Only</p>
<p>These are transactions recorded by the bank but not yet entered in the cash book:</p>
<ul>
<li>
<p><strong>Bank charges</strong>.</p>
</li>
<li>
<p><strong>Direct debits and standing orders</strong>.</p>
</li>
<li>
<p><strong>Interest earned on the bank account</strong>.</p>
</li>
<li>
<p><strong>Deposits made but not yet credited by the bank</strong>.</p>
</li>
</ul>
<p>2. Errors</p>
<p>Differences may also arise due to mistakes such as:</p>
<ul>
<li>
<p>Errors in recording transactions in the <strong>cash book</strong>.</p>
</li>
<li>
<p>Errors in the <strong>bank statement</strong> (though less common).</p>
</li>
<li>
<p>Errors made during the reconciliation process.</p>
</li>
</ul>
<p>3. Timing Differences</p>
<p>Timing differences occur because of delays in processing transactions:</p>
<ul>
<li>
<p><strong>Cheques issued</strong> may take time before they are presented and cleared by the bank.</p>
</li>
<li>
<p><strong>Deposits made</strong> may not be credited immediately by the bank.</p>
</li>
</ul>
<h2 style="text-align:center"><strong>Purpose of Bank Reconciliation</strong></h2>
<p>The main purpose of preparing a bank reconciliation statement is to:</p>
<ul>
<li>
<p>identify the reasons for differences between the cash book and bank statement balances,</p>
</li>
<li>
<p>ensure that accounting records are <strong>accurate and complete</strong>, and</p>
</li>
<li>
<p>detect and correct any <strong>errors or omissions</strong>.</p>
</li>
</ul>
<h2 style="text-align:center">Format (Framework) of a Bank Reconciliation Statement</h2>
<p>A bank reconciliation statement typically includes the following components:</p>
<ol>
<li>
<p><strong>Bank Statement Balance</strong></p>
<ul>
<li>
<p>The balance as shown on the bank statement at the end of the period.</p>
</li>
</ul>
</li>
<li>
<p><strong>Add/Subtract Adjustments</strong></p>
<ul>
<li>
<p>Adjustments for items such as outstanding cheques and deposits in transit.</p>
</li>
</ul>
</li>
<li>
<p><strong>Adjusted Bank Statement Balance</strong></p>
</li>
<li>
<p><strong>Cash Book Balance</strong></p>
<ul>
<li>
<p>The balance as shown in the cash book at the same date.</p>
</li>
</ul>
</li>
<li>
<p><strong>Add/Subtract Adjustments</strong></p>
<ul>
<li>
<p>Adjustments for items not yet recorded in the cash book (e.g., bank charges, interest).</p>
</li>
</ul>
</li>
<li>
<p><strong>Adjusted Cash Book Balance</strong></p>
</li>
</ol>
<p>After adjustments:</p>
<p>Adjusted Bank Balance = Adjusted Cash Book Balance</p>
<h2>Preparation of the Adjusted Cash Book</h2>
<p>Before preparing the bank reconciliation statement, an <strong>adjusted cash book</strong> is often prepared.</p>
<p>Steps:</p>
<ol>
<li>
<p><strong>Compare</strong> the bank statement with the cash book.</p>
</li>
<li>
<p><strong>Identify missing entries</strong> in the cash book (e.g., bank charges, direct debits, interest).</p>
</li>
<li>
<p><strong>Update the cash book</strong> by recording these missing transactions.</p>
</li>
<li>
<p><strong>Balance the adjusted cash book</strong> to obtain the corrected cash book balance.</p>
</li>
</ol>
<p><em>Note:</em> Items such as <strong>outstanding cheques</strong> and <strong>deposits in transit</strong> are not entered in the cash book; they are only used in the reconciliation statement.</p>
<h2 style="text-align:center"><strong>Items Affecting Bank Reconciliation Statements</strong></h2>
<p>The following items commonly appear in bank reconciliation:</p>
<ul>
<li>
<p><strong>Outstanding cheques</strong> (cheques issued but not yet presented).</p>
</li>
<li>
<p><strong>Deposits in transit</strong> (lodgements not yet credited).</p>
</li>
<li>
<p><strong>Bank charges</strong>.</p>
</li>
<li>
<p><strong>Direct debits and standing orders</strong>.</p>
</li>
<li>
<p><strong>Interest earned on the bank account</strong>.</p>
</li>
<li>
<p><strong>Errors</strong> in either the cash book or bank records.</p>
</li>
</ul>`
  },
  {
    id: 1991,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'End of Period Adjustment',
    summary_60s: 'End-of-period adjustments are accounting entries made at the end of an accounting period to ensure that financial statements are accurate, complete, and up to date . These adjustments are necessary because some revenues and expenses are not recorded at the exact time they are ear',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of End of Period Adjustment in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>End-of-period adjustments</strong> are accounting entries made at the end of an accounting period to ensure that financial statements are <strong>accurate, complete, and up to date</strong>.</p>
<p>These adjustments are necessary because some <strong>revenues</strong> and <strong>expenses</strong> are not recorded at the exact time they are earned or incurred. Therefore, adjustments are required to properly reflect the financial performance of the business for the period.</p>
<h2 style="text-align:center">Relevant Accounting Concepts</h2>
<p>1. Periodicity Concept</p>
<p>The <strong>periodicity concept</strong> states that the life of a business can be divided into <strong>distinct accounting periods</strong>, such as:</p>
<ul>
<li>
<p>months,</p>
</li>
<li>
<p>quarters, or</p>
</li>
<li>
<p>years.</p>
</li>
</ul>
<p>This concept allows the preparation of financial statements at regular intervals to assess performance over time.</p>
<p>2. Matching Concept</p>
<p>The <strong>matching concept</strong> requires that:</p>
<blockquote>
<p><strong>Revenues should be matched with the expenses incurred in generating those revenues.</strong></p>
</blockquote>
<p>This ensures that the <strong>profit or loss</strong> reported for a period reflects the true financial performance of the business.</p>
<h2 style="text-align:center">Types of End-of-Period Adjustments</h2>
<p>1. Accruals</p>
<p><strong>Accruals</strong> are revenues or expenses that have been <strong>earned or incurred but not yet recorded</strong> in the accounting records.</p>
<ul>
<li>
<p><strong>Accrued revenue</strong>: Revenue earned but not yet received in cash.</p>
</li>
<li>
<p><strong>Accrued expense</strong>: Expense incurred but not yet paid.</p>
</li>
</ul>
<p><strong>Example:</strong></p>
<p>Revenue earned on December 31 but received on January 2 must be recorded in December.</p>
<p>2. Prepayments</p>
<p><strong>Prepayments</strong> are payments made in advance for goods or services to be received in future periods.</p>
<ul>
<li>
<p><strong>Prepaid expenses</strong>: Expenses paid in advance.</p>
</li>
<li>
<p><strong>Unearned revenue</strong>: Revenue received before it is earned.</p>
</li>
</ul>
<p><strong>Example:</strong></p>
<p>Payment for one year’s insurance made in advance is spread over the relevant accounting periods.</p>
<p>3. Depreciation</p>
<p><strong>Depreciation</strong> is the systematic allocation of the cost of a <strong>non-current asset</strong> over its <strong>useful life</strong>.</p>
<p>This adjustment ensures that the cost of the asset is matched with the revenue it helps to generate over time.</p>
<h2 style="text-align:center">Importance of End-of-Period Adjustments</h2>
<p>End-of-period adjustments are essential for the preparation of reliable financial statements. They help to:</p>
<ul>
<li>
<p>ensure <strong>accuracy and completeness</strong> of financial records,</p>
</li>
<li>
<p>present the <strong>true profit or loss</strong> of the business,</p>
</li>
<li>
<p>comply with accounting principles such as the <strong>matching concept</strong>, and</p>
</li>
<li>
<p>improve the usefulness of financial information for decision-making.</p>
</li>
</ul>
<h2 style="text-align:center">Consequences of Inaccurate Financial Statements</h2>
<p>Failure to make proper adjustments can result in:</p>
<ul>
<li>
<p><strong>Poor decision-making</strong> by management due to misleading information,</p>
</li>
<li>
<p><strong>Difficulty in obtaining financing</strong> from lenders and investors, and</p>
</li>
<li>
<p><strong>Legal and regulatory issues</strong> arising from incorrect financial reporting.</p>
</li>
</ul>`
  },
  {
    id: 1992,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Statements - Sole Proprietorship',
    summary_60s: 'Sole Proprietorship The income statement is a financial statement that summarizes the revenues and expenses of a business over a specific accounting period. It is also referred to as the profit and loss statement . It is one of the three major financial statements, alongside: the',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Statements - Sole Proprietorship in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<h1 style="text-align:center"><strong>Sole Proprietorship</strong></h1>
<p>The <strong>income statement</strong> is a financial statement that summarizes the <strong>revenues</strong> and <strong>expenses</strong> of a business over a specific accounting period. It is also referred to as the <strong>profit and loss statement</strong>.</p>
<p>It is one of the three major financial statements, alongside:</p>
<ul>
<li>
<p>the <strong>statement of financial position (balance sheet)</strong>, and</p>
</li>
<li>
<p>the <strong>cash flow statement</strong>.</p>
</li>
</ul>
<p>For a <strong>sole proprietorship</strong>, the preparation of the income statement is relatively straightforward because the business is not a separate legal entity from the owner. However, for accounting purposes, the business is treated as a separate entity, and only business-related incomes and expenses are recorded.</p>
<p><strong>Steps in Preparing an Income Statement for a Sole Proprietorship</strong></p>
<p>To prepare an income statement, the following steps should be followed:</p>
<h2>1. Gather Financial Records</h2>
<p>Collect all relevant financial documents, such as:</p>
<ul>
<li>bank statements,</li>
<li>receipts, and</li>
<li>invoices.</li>
</ul>
<p>These records provide the data needed to determine revenues and expenses.</p>
<h2>2. Determine Revenue</h2>
<p>List all <strong>revenue</strong> earned during the accounting period.</p>
<p>Revenue represents income generated from the normal operations of the business.</p>
<h2>3. Determine Expenses</h2>
<p>Identify and list all expenses incurred, including:</p>
<ul>
<li><strong>cost of goods sold (COGS)</strong>,</li>
<li><strong>operating expenses</strong>, and</li>
<li><strong>interest expense</strong>.</li>
</ul>
<h2>4. Calculate Gross Profit</h2>
<p>Gross profit is calculated as:</p>
<p>Gross Profit = Revenue − Cost of Goods Sold</p>
<h2>5. Calculate Operating Income</h2>
<p>Operating income is determined by subtracting operating expenses from gross profit:</p>
<p>Operating Income = Gross Profit − Operating Expenses</p>
<h2>6. Calculate Net Income</h2>
<p>Net income is obtained after deducting interest expense:</p>
<p>Net Income = Operating Income − Interest Expense</p>
<h2>Format of an Income Statement for a Sole Proprietorship</h2>
<p>A typical income statement is presented as follows:</p>
<ul>
<li>Revenue</li>
<li>Cost of Goods Sold</li>
<li><strong>Gross Profit</strong></li>
<li>Operating Expenses</li>
<li><strong>Operating Income</strong></li>
<li>Interest Expense</li>
<li><strong>Net Income</strong></li>
</ul>
<h2>Importance of the Income Statement</h2>
<p>The income statement is an essential tool for evaluating the financial performance of a sole proprietorship. It helps to:</p>
<ul>
<li>
<p>assess profitability,</p>
</li>
<li>
<p>identify areas of strength and weakness,</p>
</li>
<li>
<p>support decision-making,</p>
</li>
<li>
<p>prepare financial forecasts, and</p>
</li>
<li>
<p>provide information required for loan applications.</p>
</li>
</ul>`
  },
  {
    id: 1993,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Manufacturing & Partnership Accounts',
    summary_60s: 'Partnership Accounts A partnership is a business relationship in which two or more persons agree to carry on a business with the intention of making profit and sharing those profits among themselves. Each partner contributes to the business in one or more of the following forms: ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Manufacturing & Partnership Accounts in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<h1 style="text-align:center"><strong>Partnership Accounts</strong></h1>
<p>A <strong>partnership</strong> is a business relationship in which <strong>two or more persons</strong> agree to carry on a business with the intention of making profit and sharing those profits among themselves.</p>
<p>Each partner contributes to the business in one or more of the following forms:</p>
<ul>
<li>
<p>capital (money),</p>
</li>
<li>
<p>skills or labour, or</p>
</li>
<li>
<p>property.</p>
</li>
</ul>
<p>In return, each partner is entitled to a share of the <strong>profits or losses</strong> of the business.</p>
<h2 style="text-align:center">Formation of a Partnership</h2>
<p>A partnership may be formed:</p>
<ul>
<li>
<p><strong>orally</strong>, or</p>
</li>
<li>
<p><strong>in writing</strong>.</p>
</li>
</ul>
<p>However, it is strongly recommended to have a written <strong>partnership agreement</strong> to avoid misunderstandings.</p>
<p>Contents of a Partnership Agreement</p>
<p>A partnership agreement typically includes:</p>
<ul>
<li>
<p>the <strong>name of the partnership</strong>,</p>
</li>
<li>
<p>the <strong>nature or purpose</strong> of the business,</p>
</li>
<li>
<p>the <strong>capital contribution</strong> of each partner,</p>
</li>
<li>
<p>the <strong>profit-sharing ratio</strong>,</p>
</li>
<li>
<p>the <strong>duties and management responsibilities</strong> of partners, and</p>
</li>
<li>
<p>procedures for <strong>resolving disputes</strong>.</p>
</li>
</ul>
<h2 style="text-align:center">Types of Partnerships</h2>
<p>Partnerships are generally classified into:</p>
<p>1. Limited Partnership</p>
<ul>
<li>
<p>Consists of <strong>general partners</strong> and <strong>limited partners</strong>.</p>
</li>
<li>
<p><strong>General partners</strong> have <strong>unlimited liability</strong>.</p>
</li>
<li>
<p><strong>Limited partners</strong> have liability limited to their capital contribution.</p>
</li>
</ul>
<p>2. Unlimited Partnership</p>
<ul>
<li>
<p>All partners are <strong>general partners</strong>.</p>
</li>
<li>
<p>Each partner has <strong>unlimited liability</strong> for the debts of the business.</p>
</li>
</ul>
<h2 style="text-align:center">Types of Partners</h2>
<p>Partners may also be classified based on their involvement in the business:</p>
<p>1. Active Partners</p>
<ul>
<li>
<p>Take part in the <strong>management and operation</strong> of the business.</p>
</li>
</ul>
<p>2. Dormant Partners</p>
<ul>
<li>
<p>Do <strong>not participate</strong> in day-to-day management.</p>
</li>
<li>
<p>Still share in profits and losses according to agreement.</p>
</li>
</ul>
<h2 style="text-align:center">Accounting for Partnerships</h2>
<p>The accounting system for partnerships is similar to that of a <strong>sole proprietorship</strong>, but with additional features to account for multiple owners.</p>
<p>Key Features:</p>
<ul>
<li>
<p>Each partner maintains:</p>
<ul>
<li>
<p>a <strong>Capital Account</strong>, and</p>
</li>
<li>
<p>a <strong>Current Account</strong>.</p>
</li>
</ul>
</li>
</ul>
<p>Capital Account</p>
<p>The <strong>capital account</strong> records:</p>
<ul>
<li>
<p>the amount of <strong>capital invested</strong> by each partner, and</p>
</li>
<li>
<p>any additional capital introduced.</p>
</li>
</ul>
<p>Current Account</p>
<p>The <strong>current account</strong> records:</p>
<ul>
<li>
<p><strong>drawings</strong> (withdrawals by partners),</p>
</li>
<li>
<p><strong>share of profits or losses</strong>, and</p>
</li>
<li>
<p>other adjustments such as interest or salaries (if applicable).</p>
</li>
</ul>
<h2 style="text-align:center">Statement of Profit or Loss</h2>
<p>The <strong>statement of profit or loss</strong> shows the financial performance of the partnership for a given accounting period.</p>
<p>It determines whether the partnership made a <strong>profit</strong> or incurred a <strong>loss</strong>.</p>
<h2 style="text-align:center">Statement of Distribution of Profits</h2>
<p>The <strong>statement of distribution of profits</strong> shows how the profit or loss is shared among partners based on the agreed <strong>profit-sharing ratio</strong>.</p>
<p>It may include adjustments such as:</p>
<ul>
<li>
<p>partner salaries,</p>
</li>
<li>
<p>interest on capital, and</p>
</li>
<li>
<p>interest on drawings (where applicable).</p>
</li>
</ul>
<h2 style="text-align:center">Statement of Financial Position</h2>
<p>The <strong>statement of financial position</strong> shows the financial position of the partnership at a specific date. It includes:</p>
<ul>
<li>
<p><strong>Assets</strong>,</p>
</li>
<li>
<p><strong>Liabilities</strong>, and</p>
</li>
<li>
<p><strong>Capital balances of partners</strong>.</p>
</li>
</ul>
<h2 style="text-align:center">Absence of a Partnership Agreement</h2>
<p>Where no partnership agreement exists, the following general rules apply:</p>
<ul>
<li>
<p>Profits and losses are shared <strong>equally</strong> among partners.</p>
</li>
<li>
<p><strong>No interest on capital</strong> is allowed.</p>
</li>
<li>
<p><strong>No partner is entitled to salary</strong> for managing the business.</p>
</li>
<li>
<p>All partners have equal rights in the <strong>management of the business</strong>.</p>
</li>
</ul>
<h1 style="text-align:center"><strong>Manufacturing Accounts</strong></h1>
<p>A <strong>Manufacturing Account</strong> is prepared by manufacturing businesses to determine the <strong>cost of goods manufactured (COGM)</strong> during an accounting period.</p>
<p>It shows the total cost incurred in converting <strong>raw materials</strong> into <strong>finished goods</strong>.</p>
<h2 style="text-align:center">Components of Manufacturing Cost</h2>
<p>1. Prime Cost</p>
<p><strong>Prime cost</strong> is the total of all <strong>direct costs</strong> involved in production. It is calculated as:</p>
<p>Prime Cost = Direct Materials + Direct Labour</p>
<ul>
<li>
<p><strong>Direct materials</strong>: Raw materials directly used in production.</p>
</li>
<li>
<p><strong>Direct labour</strong>: Wages paid to workers directly involved in production.</p>
</li>
</ul>
<p>2. Factory Overheads</p>
<p><strong>Factory overheads</strong> (also known as indirect manufacturing costs) are costs that cannot be directly traced to a specific product.</p>
<p>Examples include:</p>
<ul>
<li>
<p>factory rent,</p>
</li>
<li>
<p>utilities (electricity, water),</p>
</li>
<li>
<p>depreciation of factory equipment, and</p>
</li>
<li>
<p>factory insurance.</p>
</li>
</ul>
<p>3. Total Cost of Goods Manufactured (COGM)</p>
<p>The <strong>cost of goods manufactured (COGM)</strong> represents the total cost of production during a period.</p>
<p>COGM = Prime Cost + Factory Overheads</p>
<h2 style="text-align:center">Adjustments in Manufacturing Account</h2>
<p>To obtain an accurate cost of production, certain adjustments must be made:</p>
<p>1. Work-in-Progress (WIP)</p>
<p><strong>Work-in-progress (WIP)</strong> refers to goods that are <strong>partially completed</strong> at the end of the accounting period.</p>
<p>Adjustment:</p>
<p>Adjusted COGM = COGM + Opening WIP−Closing WIP</p>
<ul>
<li>
<p><strong>Opening WIP</strong> is added.</p>
</li>
<li>
<p><strong>Closing WIP</strong> is deducted.</p>
</li>
</ul>
<p>2. Direct Purchase of Finished Goods</p>
<p>Sometimes, a manufacturing business may <strong>purchase finished goods</strong> instead of producing them.</p>
<ul>
<li>
<p>These goods are <strong>not part of manufacturing cost</strong>.</p>
</li>
<li>
<p>They are treated separately in the <strong>trading account</strong>, not in the manufacturing account.</p>
</li>
</ul>
<p>3. Unrealised Profit in Unsold Inventory</p>
<p>If goods are produced but <strong>not yet sold</strong>, any profit included in their valuation is considered <strong>unrealised profit</strong>.</p>
<ul>
<li>
<p>Such profit should <strong>not be recognized</strong> until the goods are sold.</p>
</li>
<li>
<p>Necessary adjustments may be required to ensure that inventory is not overstated.</p>
</li>
</ul>
<h2>Importance of Cost of Goods Manufactured (COGM)</h2>
<p>The <strong>COGM</strong> is a key figure in manufacturing accounting because:</p>
<ul>
<li>
<p>it is used to calculate the <strong>cost of goods sold (COGS)</strong>,</p>
</li>
<li>
<p>it helps in determining the <strong>gross profit</strong>, and</p>
</li>
<li>
<p>it provides insight into the <strong>efficiency of production processes</strong>.</p>
</li>
</ul>
<h2>Methods of Costing</h2>
<p>The cost of goods manufactured can be determined using different costing methods, including:</p>
<ul>
<li>
<p><strong>Job Order Costing</strong> – used when production is based on specific jobs or orders.</p>
</li>
<li>
<p><strong>Process Costing</strong> – used when production is continuous and involves identical units.</p>
</li>
</ul>
<h2>Accuracy and Financial Reporting</h2>
<p>Accurate calculation of the <strong>manufacturing account</strong> is essential because:</p>
<ul>
<li>
<p>it ensures reliable financial statements,</p>
</li>
<li>
<p>it supports proper pricing decisions, and</p>
</li>
<li>
<p>it enhances effective cost control.</p>
</li>
</ul>`
  },
  {
    id: 1994,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Incomplete Records',
    summary_60s: 'Financial statements are vital tools used to assess the financial position and performance of a business. They provide important information to: investors, creditors, and management. However, in some cases—especially in small businesses or where record-keeping is poor— complete a',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Incomplete Records in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>Financial statements</strong> are vital tools used to assess the financial position and performance of a business. They provide important information to:</p>
<ul>
<li>
<p>investors,</p>
</li>
<li>
<p>creditors, and</p>
</li>
<li>
<p>management.</p>
</li>
</ul>
<p>However, in some cases—especially in small businesses or where record-keeping is poor—<strong>complete accounting records may not be available</strong>. This situation is referred to as <strong>incomplete records</strong>.</p>
<p>Incomplete records make it difficult to prepare accurate financial statements using the normal double-entry system.</p>
<h2 style="text-align:center">Challenges of Preparing Financial Statements from Incomplete Records</h2>
<p>When dealing with incomplete records, several difficulties may arise:</p>
<p>1. Missing Data</p>
<p>Some financial information may be unavailable due to:</p>
<ul>
<li>
<p>lost records,</p>
</li>
<li>
<p>incomplete entries, or</p>
</li>
<li>
<p>failure to record transactions.</p>
</li>
</ul>
<p>2. Inaccurate Data</p>
<p>Existing data may not be reliable due to:</p>
<ul>
<li>
<p>human error,</p>
</li>
<li>
<p>fraud, or</p>
</li>
<li>
<p>improper application of accounting principles.</p>
</li>
</ul>
<p>3. Lack of Supporting Documentation</p>
<p>Without proper documents such as invoices or receipts:</p>
<ul>
<li>
<p>it becomes difficult to interpret transactions, and</p>
</li>
<li>
<p>verification of entries is limited.</p>
</li>
</ul>
<h2 style="text-align:center">Techniques for Preparing Financial Statements from Incomplete Records</h2>
<p>Despite these challenges, financial statements can still be prepared using certain techniques:</p>
<p>1. Estimation</p>
<p>This involves making <strong>reasonable assumptions</strong> about missing figures based on available information.</p>
<ul>
<li>
<p>Estimates should be logical and consistent with known data.</p>
</li>
</ul>
<p>2. Ratio Analysis</p>
<p>This technique involves comparing financial ratios with:</p>
<ul>
<li>
<p>industry averages, or</p>
</li>
<li>
<p>the business’s past performance.</p>
</li>
</ul>
<p>It helps in estimating missing values and assessing the reasonableness of figures.</p>
<p>3. Trend Analysis</p>
<p>This involves examining patterns in financial data over time.</p>
<ul>
<li>
<p>Trends can help predict missing amounts and identify unusual changes.</p>
</li>
</ul>
<h2 style="text-align:center"><strong>Disclosure Requirements</strong></h2>
<p>When financial statements are prepared from incomplete records, it is important to clearly state:</p>
<ul>
<li>
<p>the <strong>limitations of the available data</strong>, and</p>
</li>
<li>
<p>the <strong>methods used</strong> (such as estimation, ratio analysis, or trend analysis).</p>
</li>
</ul>
<p>Proper disclosure ensures that users understand the <strong>degree of uncertainty</strong> associated with the financial information.</p>`
  },
  {
    id: 1995,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Accounts of Clubs and Societies',
    summary_60s: 'Preparation of Financial Statements for Not-for-Profit Organizations Introduction Not-for-profit organizations (NPOs) are entities established not for the purpose of making profit , but to provide services such as: social welfare, education, religion, or cultural and recreational',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Accounts of Clubs and Societies in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Preparation of Financial Statements for Not-for-Profit Organizations</p>
<h1 style="text-align:center"><strong>Introduction</strong></h1>
<p><strong>Not-for-profit organizations (NPOs)</strong> are entities established <strong>not for the purpose of making profit</strong>, but to provide services such as:</p>
<ul>
<li>social welfare,</li>
<li>education,</li>
<li>religion, or</li>
<li>cultural and recreational activities.</li>
</ul>
<p>Examples include <strong>clubs and societies</strong>.</p>
<p>Although profit-making is not their objective, NPOs must maintain proper financial records to ensure <strong>accountability</strong> and <strong>financial sustainability</strong>.</p>
<h2 style="text-align:center">Financial Statements of Not-for-Profit Organizations</h2>
<p>Financial statements provide information about the financial activities and position of an organization. The main financial statements include:</p>
<p>1. Statement of Financial Position (Balance Sheet)</p>
<p>This statement shows:</p>
<ul>
<li>
<p><strong>Assets</strong>,</p>
</li>
<li>
<p><strong>Liabilities</strong>, and</p>
</li>
<li>
<p><strong>Accumulated Fund (Net Assets)</strong></p>
</li>
</ul>
<p>at a specific date.</p>
<p>2. Income and Expenditure Account</p>
<p>This is similar to the income statement of a profit-making business. It shows:</p>
<ul>
<li>
<p><strong>income earned</strong>,</p>
</li>
<li>
<p><strong>expenses incurred</strong>, and</p>
</li>
<li>
<p>the resulting <strong>surplus or deficit</strong> for the period.</p>
</li>
<li>
<p><strong>Surplus</strong>: when income exceeds expenditure.</p>
</li>
<li>
<p><strong>Deficit</strong>: when expenditure exceeds income.</p>
</li>
</ul>
<p>3. Receipts and Payments Account</p>
<p>This is a summary of <strong>cash transactions</strong> over a period.</p>
<ul>
<li>
<p>It records <strong>all cash receipts and payments</strong>, whether capital or revenue in nature.</p>
</li>
<li>
<p>It is prepared on a <strong>cash basis</strong> (not accrual basis).</p>
</li>
</ul>
<h2 style="text-align:center">Preparation of Financial Statements for NPOs</h2>
<p>The preparation of financial statements for NPOs is similar to that of profit-oriented organizations, but with key differences:</p>
<p>Key Differences</p>
<ul>
<li>
<p>NPOs do <strong>not have owners</strong>; instead, they have an <strong>accumulated fund</strong>.</p>
</li>
<li>
<p>There is no <strong>profit distribution</strong>; surpluses are <strong>reinvested</strong> into the organization.</p>
</li>
<li>
<p>Income is often derived from:</p>
<ul>
<li>
<p>subscriptions,</p>
</li>
<li>
<p>donations,</p>
</li>
<li>
<p>grants, and</p>
</li>
<li>
<p>fundraising activities.</p>
</li>
</ul>
</li>
</ul>
<h2 style="text-align:center">Specific Features of Clubs and Societies</h2>
<p>Clubs and societies are common examples of NPOs and may require additional accounting records.</p>
<p>1. Receipts and Payments Account</p>
<ul>
<li>
<p>Summarizes all <strong>cash inflows and outflows</strong>.</p>
</li>
<li>
<p>Includes both <strong>capital and revenue items</strong>.</p>
</li>
<li>
<p>Serves as a basis for preparing the Income and Expenditure Account.</p>
</li>
</ul>
<p>2. Income and Expenditure Account</p>
<ul>
<li>
<p>Prepared on an <strong>accrual basis</strong>.</p>
</li>
<li>
<p>Adjustments are made for:</p>
<ul>
<li>
<p>outstanding expenses,</p>
</li>
<li>
<p>prepaid expenses,</p>
</li>
<li>
<p>accrued income, and</p>
</li>
<li>
<p>income received in advance.</p>
</li>
</ul>
</li>
</ul>
<p>3. Statement of Financial Position</p>
<ul>
<li>
<p>Shows the financial position of the club or society.</p>
</li>
<li>
<p>The balancing figure is the <strong>accumulated fund</strong>, which represents the net worth of the organization.</p>
</li>
</ul>
<p>4. Trading Account (Where Applicable)</p>
<p>If a club or society engages in <strong>trading activities</strong> (e.g., operating a bar, restaurant, or shop), a <strong>trading account</strong> is prepared to determine:</p>
<p><strong>Gross Profit or Loss </strong></p>
<p>This is then transferred to the <strong>Income and Expenditure Account</strong>.</p>
<h2 style="text-align:center">Importance of Financial Statements in NPOs</h2>
<p>Proper financial reporting helps to:</p>
<ul>
<li>ensure <strong>transparency and accountability</strong>,</li>
<li>monitor <strong>financial performance</strong>,</li>
<li>assist in <strong>planning and decision-making</strong>, and</li>
<li>build confidence among <strong>donors, members, and stakeholders</strong>.</li>
</ul>`
  },
  {
    id: 1996,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINANCIAL ACCOUNTING',
    subtopic: 'Limited Liability Companies',
    summary_60s: 'A limited liability company is a form of business organization recognized by law as a separate legal entity from its owners. Because of this separate legal status, the liability of members or shareholders is limited to the amount they have invested or agreed to contribute to the ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Limited Liability Companies in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>A limited liability company is a form of business organization recognized by law as a separate legal entity from its owners.</p>
<p>Because of this separate legal status, the liability of members or shareholders is limited to the amount they have invested or agreed to contribute to the company. This means that the personal assets of the owners are generally protected from the debts and obligations of the business.</p>
<p>Limited liability companies are commonly used for business operations because they can raise capital, enjoy continuity of existence, and operate under a formal management structure.</p>
<h2 style="text-align:center"><strong>Types of Limited Liability Companies</strong></h2>
<p>The main types of limited liability companies are:</p>
<ul>
<li>
<p><strong>Private limited liability company: </strong>This is a company whose shares are not offered to the general public. Ownership is usually restricted to a limited number of persons.</p>
</li>
<li>
<p><strong>Public limited liability company: </strong>This is a company whose shares may be offered to the public and may be traded publicly, subject to legal requirements.</p>
</li>
</ul>
<h2 style="text-align:center"><strong>Liability Companies Vs Other Business</strong></h2>
<p>A limited liability company differs from other forms of business, such as a sole proprietorship and partnership, in the following ways:</p>
<ul>
<li>
<p>It is a <strong>separate legal entity</strong> from its owners.</p>
</li>
<li>
<p>The owners have <strong>limited liability</strong>.</p>
</li>
<li>
<p>It has <strong>perpetual succession</strong>, meaning the company continues to exist even if ownership changes.</p>
</li>
<li>
<p>It is usually managed by <strong>directors</strong> appointed to run the affairs of the company.</p>
</li>
<li>
<p>Its ownership is represented by <strong>shares</strong>.</p>
</li>
</ul>
<p>In contrast:</p>
<ul>
<li>
<p>A <strong>sole proprietorship</strong> is owned and controlled by one person, and the owner bears unlimited liability.</p>
</li>
<li>
<p>A <strong>partnership</strong> is owned by two or more persons, and the partners may also bear unlimited liability, except where the law provides otherwise.</p>
</li>
</ul>
<h2 style="text-align:center">Articles and Memorandum of Association</h2>
<p>The <strong>Memorandum of Association</strong> is the document that states the fundamental details of the company, such as:</p>
<ul>
<li>the name of the company,</li>
<li>the registered office,</li>
<li>the objectives of the company, and</li>
<li>the amount of authorized capital, where applicable.</li>
</ul>
<p>The <strong>Articles of Association</strong> contain the rules and regulations governing the internal management of the company. They explain how the company is to be operated, including matters relating to meetings, voting, appointment of directors, and other administrative procedures.</p>
<h2 style="text-align:center">Shareholders and Directors of Companies</h2>
<p>The owners of a limited liability company are known as <strong>shareholders</strong> or <strong>members</strong>. They provide capital to the business by purchasing shares.</p>
<p>The company is managed by <strong>directors</strong>, who are responsible for the day-to-day administration and policy decisions of the company. Directors act on behalf of the company and are expected to manage its affairs in accordance with the law and the company’s governing documents.</p>
<h2 style="text-align:center">Issue of Shares and Debentures</h2>
<p>A limited liability company may raise long-term finance through the issue of:</p>
<ul>
<li>
<p><strong>Shares</strong> – These represent units of ownership in the company.</p>
</li>
<li>
<p><strong>Debentures</strong> – These are long-term loan instruments issued by the company to borrow money.</p>
</li>
</ul>
<p>Shareholders are owners of the company, while debenture holders are creditors of the company.</p>
<p>Preparation of Statement of Profit or Loss and Other Comprehensive Income for Internal Use</p>
<p>The <strong>statement of profit or loss</strong> is a financial statement that shows the revenue earned and expenses incurred by the company during a given accounting period. It reveals whether the company made a <strong>profit</strong> or incurred a <strong>loss</strong>.</p>
<p>The <strong>statement of profit or loss and other comprehensive income</strong> goes further by including other comprehensive income items in addition to profit or loss. It therefore presents the overall financial performance of the company for the period.</p>
<p>Preparation of Statement of Financial Position for Internal Use</p>
<p>The <strong>statement of financial position</strong> is a financial statement that shows the financial position of the company at a specific date. It presents:</p>
<ul>
<li>
<p><strong>Assets</strong></p>
</li>
<li>
<p><strong>Liabilities</strong></p>
</li>
<li>
<p><strong>Equity</strong></p>
</li>
</ul>
<p>This statement is also known as the <strong>balance sheet</strong>. It helps users to determine what the company owns, what it owes, and the residual interest belonging to shareholders.</p>`
  },
  {
    id: 1997,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'NATURE OF ACCOUNTING',
    subtopic: 'Accounting And Bookkeeping',
    summary_60s: 'Accounting is the systematic process of recording, classifying, summarizing, and analyzing the financial transactions of a business. Another way to define accounting is as the recording of financial transactions related to a business. Often called the "language of business," acco',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Accounting And Bookkeeping in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Accounting is the systematic process of recording, classifying, summarizing, and analyzing the financial transactions of a business.</p><p>Another way to define accounting is as the recording of financial transactions related to a business.</p><p>Often called the "language of business," accounting translates financial activities into information that businesses, investors, and governments can understand, enabling them to make informed decisions.</p><p><strong>OUTLINE:</strong></p><ul><li>Definition of accounting.</li><li>History, nature and functions of Accounting.</li><li>Users of Accounting information.</li><li>Stages in the Accounting process.</li><li>Characteristics of Accounting information.</li><li>Bookkeeping.</li></ul><h1 style="text-align:center"><strong>Importance of Accounting</strong></h1><ol><li><strong>Investing in a business</strong>: Evaluating the financial health and potential of a business.</li><li><strong>Lending money to a business</strong>: Assessing the risk and security of loans.</li><li><strong>Managing business resources effectively</strong>: Optimizing the use of assets and resources.</li><li><strong>Complying with tax and regulatory requirements</strong>: Ensuring adherence to legal standards.</li></ol><h2 style="text-align:center"><strong>Users of Accounting Information</strong></h2><table border="2"><thead><tr><th><strong>Internal Users</strong></th><th><strong>External Users</strong></th></tr></thead><tbody><tr><td>Owners (shareholders) of the company</td><td>Lenders (e.g., banks)</td></tr><tr><td>Management of the company</td><td>Customers of the company</td></tr><tr><td>Employees of the company</td><td>Suppliers of goods and services</td></tr></tbody></table><p>Everyone makes use of accounting information at some point in their lives. However, certain groups rely on it more than others. These groups form the principal users of accounting information, and they include:</p><ol><li><strong>Government</strong></li><li><strong>Financial Analysts</strong></li><li><strong>Tax Authorities</strong></li><li><strong>Banks</strong></li><li><strong>Management</strong></li><li><strong>Public</strong></li><li><strong>Employees</strong></li><li><strong>Creditors</strong></li></ol><p>These users need accounting information to make correct and accurate decisions. This means that accounting information must possess certain qualities. Some of these qualities are:</p><ol><li><strong>Timeliness</strong></li><li><strong>Reliability</strong></li><li><strong>Verifiability</strong></li><li><strong>Relevance</strong></li><li><strong>Predictive Value</strong></li><li><strong>Comprehensiveness</strong>, etc.</li></ol><h2 style="text-align:center"><strong>The Stages of the Accounting System</strong></h2><p>Accounting typically involves four stages:</p><ol><li><strong>Recording</strong>: Documenting financial transactions in raw form.</li><li><strong>Classifying</strong>: Organizing data into meaningful categories.</li><li><strong>Creating</strong>: Developing reports based on organized data.</li><li><strong>Summarizing</strong>: Presenting financial information in a concise form for decision-making.</li></ol><h2 style="text-align:center"><strong>History and Development of Accounting</strong></h2><p>Modern accounting evolved over centuries through habit, practice, and convention. Two key developments shaped the profession:</p><ol><li><strong>Double-Entry Bookkeeping</strong><ul><li>Introduced in the 14th–15th centuries by Luca Pacioli, known as the "Father of Accounting.".</li></ul></li><li><strong>Professionalization of Accountancy</strong><ul><li>Emerged in the 19th–20th centuries. The modern chartered accountancy profession began in Scotland. Professional bodies, such as the Institute of Chartered Accountants in England and Wales (1880), formalized the field.</li></ul></li></ol><p><strong>Core Objectives of Financial Reports</strong></p><ol><li>To showcase how financial resources were utilized during the reporting period.</li><li>To present the profit or loss incurred within the period.</li><li>To display the entity’s assets, liabilities, and equity at the end of the reporting period.</li></ol><h2 style="text-align:center"><strong>Nature and Significance of Accounting</strong></h2><p><strong>Financial Accounting</strong> focuses on the structured method of reporting an entity's financial performance and position. This involves preparing and presenting financial statements, such as:</p><ul><li><strong>Income Statement</strong>: Measures the profit or loss over a specified period.</li><li><strong>Statement of Financial Position (Balance Sheet)</strong> : Shows the entity’s assets, liabilities, and equity at the end of a period.</li><li><strong>Cash Flow Statement</strong>: Summarizes cash inflows and outflows over a period.</li></ul><p>Key Features of Financial Accounting</p><table border="2"><thead><tr><th><strong>Feature</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td><strong>Purpose</strong></td><td>To provide stakeholders with essential financial information for decision-making.</td></tr><tr><td><strong>Focus</strong></td><td>Revenue, costs, assets, and liabilities.</td></tr><tr><td><strong>Stewardship Function</strong></td><td>Enables management to demonstrate accountability to stakeholders.</td></tr></tbody></table><h1 style="text-align:center"><strong>Bookkeeping</strong></h1><p>Bookkeeping is the daily recording of financial transactions, forming the foundation for accounting, which then analyzes these records to guide decisions on spending, investing, and growth.</p><p><strong>Objectives of Bookkeeping and Accounting:</strong></p><ul><li>Maintain a permanent record of transactions.</li><li>Determine profit or loss.</li><li>Assess financial position.</li><li>Provide sales and purchase information.</li><li>Identify creditors and debtors.</li><li>Manage stock levels.</li><li>Calculate tax liabilities.</li></ul><h2 style="text-align:center"><strong>Process of Bookkeeping</strong></h2><ol><li><strong>Classification:</strong> Categorize each transaction using supporting documents.</li><li><strong>Recording:</strong> Enter transactions in subsidiary books (e.g., cash book, sales journal).</li><li><strong>Posting:</strong> Transfer entries to the general ledger.</li><li><strong>Trial Balance:</strong> Summarize account balances to verify accuracy.</li></ol><h2 style="text-align:center"><strong>Bookkeeping vs Accounting</strong></h2><p>While bookkeeping and accounting are related, they have distinct roles and scopes:</p><table border="2" style="width:450px"><tbody><tr><th>Feature</th><th>Bookkeeping</th><th>Accounting</th></tr><tr><td><strong>Scope</strong></td><td>Narrow focus on recording financial data</td><td>Broader scope, encompassing analysis, interpretation, and reporting</td></tr><tr><td><strong>Frequency</strong></td><td>Daily recording of transactions</td><td>Periodic reporting (e.g., monthly, quarterly, annually)</td></tr><tr><td><strong>Complexity</strong></td><td>Primarily concerned with the mechanical aspects of recording</td><td>More complex, involving professional judgment and decision-making</td></tr><tr><td><strong>Responsibilities</strong></td><td>Often handled by junior staff or clerks</td><td>Typically performed by qualified accountants with specialized training</td></tr><tr><td><strong>Skills Required</strong></td><td>Primarily requires accuracy and attention to detail</td><td>Demands analytical skills, financial acumen, and interpretive abilities</td></tr></tbody></table><h2 style="text-align:center"><strong>Users and Characteristics</strong></h2><p>Accounting information is used by various stakeholders, including:</p><ol><li><strong>Government</strong>: For regulatory and tax purposes.</li><li><strong>Financial Analysts</strong>: To assess business performance and potential.</li><li><strong>Tax Authorities</strong>: To ensure compliance with tax laws.</li><li><strong>Banks</strong>: To evaluate loan applications and financial stability.</li><li><strong>Management</strong>: For strategic planning and decision-making.</li><li><strong>Public</strong>: For investment and economic understanding.</li><li><strong>Employees</strong>: For job security and profit-sharing assessments.</li><li><strong>Creditors</strong>: To assess creditworthiness and repayment ability.</li></ol>`
  },
  {
    id: 1998,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'BASIC AUDITING',
    subtopic: 'Basic Auditing',
    summary_60s: 'Auditing is the independent examination of financial information for the purpose of expressing an opinion on whether that information has been prepared, in all material respects, in accordance with an applicable reporting framework. Content History of Auditing; Nature and Scope o',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Basic Auditing in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Auditing is the independent examination of financial information for the purpose of expressing an opinion on whether that information has been prepared, in all material respects, in accordance with an applicable reporting framework.</p>
<h1 style="text-align:center"><strong>Content</strong></h1>
<p>History of Auditing; Nature and Scope of Auditing; Audit Framework; Audit Communication; Audit Report; and Contemporary Issues in Auditing and Accounting.</p>
<h2 style="text-align:center"><strong>Areas Of Study</strong></h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Topic</th>
<th>Area</th>
<th>What to Know</th>
</tr>
</thead>
<tbody>
<tr>
<td>History of Auditing</td>
<td>Development of auditing</td>
<td>How auditing developed from simple fraud checks to a modern assurance profession</td>
</tr>
<tr>
<td>Nature and Scope of Auditing</td>
<td>Meaning and objectives</td>
<td>The purpose of auditing and the work performed by the auditor</td>
</tr>
<tr>
<td>Audit Framework</td>
<td>Foundation of audit work</td>
<td>Legal, conceptual, and regulatory basis of auditing</td>
</tr>
<tr>
<td>Audit Communication</td>
<td>Audit interaction and records</td>
<td>Engagement letters, documentation, and communication between auditor and client</td>
</tr>
<tr>
<td>Audit Report</td>
<td>Final audit output</td>
<td>Meaning, structure, and preparation of the audit report</td>
</tr>
<tr>
<td>Contemporary Issues</td>
<td>Current developments</td>
<td>Technology, ethics, sustainability assurance, and other modern issues</td>
</tr>
</tbody>
</table>
<h1 style="text-align:center"><strong>History of Auditing</strong></h1>
<p>The word <strong>audit</strong> comes from the Latin word <strong>audire</strong>, meaning <strong>“to hear.”</strong> In the early period, financial records were read aloud by account stewards, while an independent person listened in order to verify their correctness.</p>
<p>Over time, auditing evolved from a simple method of checking cash and honesty into a professional examination of financial statements and internal controls.</p>
<h2 style="text-align:center"><strong>Historical Development of Auditing</strong></h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Period</th>
<th>Main Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ancient / Medieval Period</td>
<td>Rulers, temple authorities, and merchants checked records to prevent theft and misappropriation</td>
</tr>
<tr>
<td>Industrial Revolution</td>
<td>Expansion of companies and separation of ownership from management created the need for independent verification</td>
</tr>
<tr>
<td>Nineteenth Century</td>
<td>Company laws in Britain began to require audits for certain entities, and the profession became more organised</td>
</tr>
<tr>
<td>Twentieth Century</td>
<td>Auditing moved from complete checking to test checking, system review, materiality, and risk-based approaches</td>
</tr>
<tr>
<td>Modern Era</td>
<td>Auditors now consider governance, fraud risk, information technology, sustainability reporting, and global standards</td>
</tr>
</tbody>
</table>
<h2 style="text-align:center"><strong>Development of the Auditing Profession</strong></h2>
<p>The growth of joint-stock companies created a separation between owners and managers. As a result, auditing became necessary to reduce the information gap between shareholders and management.</p>
<p>Professional accountancy bodies later emerged to:</p>
<ul>
<li>
<p>train members,</p>
</li>
<li>
<p>regulate conduct, and</p>
</li>
<li>
<p>protect public confidence.</p>
</li>
</ul>
<p>Auditing standards were subsequently introduced to improve consistency and reliability in audit work. Corporate failures and fraud cases also increased public demand for stronger auditor independence, better evidence, and clearer reporting.</p>
<p>In Nigeria and many other jurisdictions, company law and professional regulation provide the basis for the appointment, duties, and reporting responsibilities of auditors.</p>
<h2 style="text-align:center"><strong>Importance Of Auditing</strong></h2>
<p>The history of auditing explains why modern auditors are expected to be:</p>
<ul>
<li>independent,</li>
<li>professionally sceptical,</li>
<li>properly trained, and</li>
<li>accountable in the public interest.</li>
</ul>
<h1 style="text-align:center"><strong>Nature and Scope of Auditing</strong></h1>
<p>Auditing is the independent examination of books, records, vouchers, and financial statements of an entity in order to enable the auditor to express an opinion on whether the financial statements show a <strong>true and fair view</strong>, or are fairly presented in accordance with the relevant financial reporting framework.</p>
<h2>Objectives of Auditing</h2>
<p>The objectives of auditing include the following:</p>
<ul>
<li>To express an independent opinion on the financial statements</li>
<li>To enhance the credibility of financial information used by shareholders, lenders, regulators, and other stakeholders</li>
<li>To obtain sufficient appropriate audit evidence before reaching a conclusion</li>
<li>To evaluate whether accounting policies are appropriate and consistently applied</li>
<li>To consider whether the entity is likely to continue as a going concern for the foreseeable future</li>
</ul>
<h2><strong>Important Distinction</strong></h2>
<p>The primary objective of an audit is <strong>not</strong> to prepare the accounts or to guarantee that fraud has been eliminated. Management is responsible for preparing the financial statements, while the auditor is responsible for examining them and reporting on them.</p>
<h2 style="text-align:center"><strong>Nature of Auditing</strong></h2>
<p>Auditing has the following characteristics:</p>
<ul>
<li>
<p><strong>It is independent:</strong> The auditor must be free from bias or undue influence.</p>
</li>
<li>
<p><strong>It is evidence-based:</strong> Conclusions are supported by documents, explanations, observation, recalculation, and analytical procedures.</p>
</li>
<li>
<p><strong>It is professional:</strong> The auditor applies judgement, scepticism, and due care.</p>
</li>
<li>
<p><strong>It is selective:</strong> Modern audits usually rely on sampling and risk assessment rather than checking every transaction.</p>
</li>
<li>
<p><strong>It is guided by standards:</strong> Audit work is performed in line with legal requirements, ethical rules, and auditing standards.</p>
</li>
</ul>
<h2 style="text-align:center"><strong>Scope of Auditing</strong></h2>
<p>The scope of auditing covers:</p>
<ul>
<li>examination of accounting records and source documents,</li>
<li>evaluation of the accounting system and internal control system,</li>
<li>verification of assets and liabilities where possible,</li>
<li>review of income, expenses, and disclosures in the financial statements,</li>
<li>consideration of compliance with laws, regulations, and company policies affecting the financial statements, and</li>
<li>communication of findings to management and those charged with governance.</li>
</ul>
<h2 style="text-align:center"><strong>Limitations of Auditing</strong></h2>
<p>Despite its importance, auditing has certain limitations:</p>
<ul>
<li>An audit provides <strong>reasonable assurance</strong>, not absolute assurance.</li>
<li>Sampling means that not every item is tested.</li>
<li>Management may conceal information or collude to commit fraud.</li>
<li>Some accounting estimates involve uncertainty and judgement.</li>
<li>Time and cost constraints may affect the extent of audit procedures.</li>
</ul>
<h2>Concepts</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Concept</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Independence</td>
<td>Freedom from personal interest or influence that may affect judgement</td>
</tr>
<tr>
<td>Materiality</td>
<td>The importance of an error or omission in relation to users’ decisions</td>
</tr>
<tr>
<td>Audit evidence</td>
<td>Information used by the auditor to support conclusions</td>
</tr>
<tr>
<td>Reasonable assurance</td>
<td>A high, but not absolute, level of assurance</td>
</tr>
</tbody>
</table>
<h1 style="text-align:center"><strong>Audit Framework</strong></h1>
<p>Audit work is not carried out in isolation. It operates within a framework made up of law, professional concepts, and regulatory requirements. These determine the appointment of auditors, the conduct of the audit, and the final report.</p>
<h2>Legal and Statutory Framework</h2>
<p>The legal and statutory framework provides the legal authority for audit work. Under this framework:</p>
<ul>
<li>
<p>company legislation usually governs the appointment, removal, remuneration, rights, and duties of auditors,</p>
</li>
<li>
<p>the law may require the annual financial statements of certain entities to be audited,</p>
</li>
<li>
<p>auditors often have statutory rights of access to books, records, explanations, and meetings relevant to their duties,</p>
</li>
<li>
<p>directors are responsible for preparing the financial statements, while auditors are responsible for reporting on them, and</p>
</li>
<li>
<p>sector-specific laws may impose additional requirements on banks, insurance companies, charities, public institutions, and listed companies.</p>
</li>
</ul>
<h2>Conceptual Framework</h2>
<p>The conceptual framework contains the key ideas that guide audit planning and performance. These include:</p>
<ul>
<li>
<p><strong>Assertions:</strong> Management makes assertions concerning existence, completeness, accuracy, valuation, rights and obligations, and presentation.</p>
</li>
<li>
<p><strong>Audit risk:</strong> This is the risk that the auditor expresses an inappropriate opinion on financial statements that are materially misstated.</p>
</li>
<li>
<p><strong>Materiality:</strong> This helps the auditor determine what is significant and how much testing is necessary.</p>
</li>
<li>
<p><strong>Professional scepticism:</strong> This means maintaining an alert and questioning mind when evaluating audit evidence.</p>
</li>
<li>
<p><strong>Evidence and judgement:</strong> The auditor combines evidence gathering with professional judgement in reaching conclusions.</p>
</li>
</ul>
<h2>Regulatory Framework</h2>
<p>The regulatory framework ensures consistency, quality, and professional discipline in audit practice. It includes:</p>
<ul>
<li>
<p><strong>International Standards on Auditing (ISAs),</strong> which guide planning, evidence collection, reporting, and quality management,</p>
</li>
<li>
<p><strong>codes of professional ethics,</strong> which regulate integrity, objectivity, competence, confidentiality, and professional behaviour,</p>
</li>
<li>
<p><strong>national regulators and stock exchange rules,</strong> which may impose additional disclosure, independence, and reporting obligations, and</p>
</li>
<li>
<p><strong>quality management standards,</strong> which require audit firms to maintain policies that support audit quality.</p>
</li>
</ul>
<h1 style="text-align:center"><strong>Audit Communication</strong></h1>
<p>Audit communication refers to the formal exchange of information between the auditor, the client, management, and those charged with governance. Effective communication helps to define responsibilities, reduce misunderstanding, and support efficient audit work.</p>
<h2>Documentation of the Audit–Client Agreement</h2>
<p>The main document that records the agreement between the auditor and the client is the <strong>engagement letter</strong>. It is issued before the audit begins and sets out the terms under which the work will be performed.</p>
<h2>Typical Contents of an Engagement Letter</h2>
<p>An engagement letter usually contains:</p>
<ul>
<li>the objective and scope of the audit,</li>
<li>the responsibilities of management for preparing the financial statements and maintaining internal control,</li>
<li>the responsibilities of the auditor and the fact that the audit provides reasonable assurance,</li>
<li>the applicable financial reporting framework,</li>
<li>the expected form and content of reports or other communications, and</li>
<li>the basis of fees and practical arrangements, such as access to records and staff.</li>
</ul>
<h2>Other Important Audit Communications</h2>
<p>Important communications during the audit may include:</p>
<ul>
<li>audit planning discussions with management,</li>
<li>requests for schedules, explanations, confirmations, and representations,</li>
<li>communication of significant deficiencies in internal control,</li>
<li>a management letter stating weaknesses and recommendations,</li>
<li>a written representation letter obtained from management, and</li>
<li>communication with those charged with governance on significant audit matters.</li>
</ul>
<h2>Audit Documentation</h2>
<p>Audit documentation consists of working papers prepared or obtained by the auditor during the audit engagement. It provides evidence of:</p>
<ul>
<li>
<p>planning performed,</p>
</li>
<li>
<p>tests carried out,</p>
</li>
<li>
<p>results obtained, and</p>
</li>
<li>
<p>conclusions reached.</p>
</li>
</ul>
<p>Working papers may be classified into:</p>
<ul>
<li>
<p><strong>Current files</strong> — documents relating to the current year’s audit</p>
</li>
<li>
<p><strong>Permanent files</strong> — documents of continuing relevance from year to year</p>
</li>
</ul>
<p>Good audit documentation should be:</p>
<ul>
<li>
<p>complete,</p>
</li>
<li>
<p>clear,</p>
</li>
<li>
<p>timely, and</p>
</li>
<li>
<p>properly referenced.</p>
</li>
</ul>
<h2>Current File and Permanent File</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Current File</th>
<th>Permanent File</th>
</tr>
</thead>
<tbody>
<tr>
<td>Audit programme for the year</td>
<td>Constitutional documents</td>
</tr>
<tr>
<td>Trial balance and lead schedules</td>
<td>Long-term contracts and loan agreements</td>
</tr>
<tr>
<td>Testing of transactions and balances</td>
<td>Details of accounting policies</td>
</tr>
<tr>
<td>Draft and final financial statements</td>
<td>Organisation structure and prior-year background</td>
</tr>
</tbody>
</table>
<h2>Importance of Documentation</h2>
<p>An audit opinion must be supported by adequate records. Where work is not documented, it may be difficult to prove that the audit was properly performed.</p>
<h1 style="text-align:center"><strong>Audit Report</strong></h1>
<p>An audit report is the formal written expression of the auditor’s opinion on the financial statements. It is the final product of the audit process and is usually addressed to the shareholders or members of the entity.</p>
<h2>Main Elements of an Audit Report</h2>
<p>The main elements of an audit report include:</p>
<ul>
<li>a title showing that the report is from an independent auditor,</li>
<li>the addressee,</li>
<li>the opinion section,</li>
<li>the basis for opinion section,</li>
<li>responsibilities of management for the financial statements,</li>
<li>auditor’s responsibilities for the audit of the financial statements,</li>
<li>other reporting responsibilities, where applicable, and</li>
<li>name, signature, address, and date of the auditor.</li>
</ul>
<h2>Types of Audit Opinion</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Type</th>
<th>Meaning</th>
<th>When Used</th>
</tr>
</thead>
<tbody>
<tr>
<td>Unmodified opinion</td>
<td>The financial statements are fairly presented in all material respects</td>
<td>Used when the auditor obtains sufficient appropriate evidence and no material misstatement remains</td>
</tr>
<tr>
<td>Qualified opinion</td>
<td>Except for a specific matter, the financial statements are fairly presented</td>
<td>Used when a material issue exists but is not pervasive</td>
</tr>
<tr>
<td>Adverse opinion</td>
<td>The financial statements are materially and pervasively misstated</td>
<td>Used when the misstatement is both material and pervasive</td>
</tr>
<tr>
<td>Disclaimer of opinion</td>
<td>The auditor does not express an opinion</td>
<td>Used when sufficient appropriate evidence cannot be obtained and the possible effects are material and pervasive</td>
</tr>
</tbody>
</table>
<h2>Preparation of an Audit Report</h2>
<p>In preparing the audit report, the auditor should:</p>
<ul>
<li>review all audit evidence and ensure that significant matters have been resolved,</li>
<li>check whether the financial statements comply with the applicable reporting framework,</li>
<li>assess whether identified misstatements are material individually or in aggregate,</li>
<li>consider going concern, subsequent events, and disclosures,</li>
<li>determine the correct type of opinion and draft the report accordingly, and</li>
<li>ensure that the date of the report is not earlier than the date on which sufficient appropriate evidence was obtained.</li>
</ul>
<h2>Important Point</h2>
<p>The wording of the audit report is very important. A slight change in wording may indicate a different level of assurance or a different form of opinion.</p>
<h2>Difference Between Audit Report and Management Letter</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Audit Report</th>
<th>Management Letter</th>
</tr>
</thead>
<tbody>
<tr>
<td>Public-facing formal opinion on the financial statements</td>
<td>Private communication of internal control weaknesses and recommendations</td>
</tr>
<tr>
<td>Addressed mainly to shareholders or members</td>
<td>Addressed to management or those charged with governance</td>
</tr>
<tr>
<td>Standardised structure</td>
<td>Less standardised and more detailed in practical recommendations</td>
</tr>
</tbody>
</table>
<h1 style="text-align:center"><strong>Contemporary Issues in Auditing and Accounting</strong></h1>
<p>Auditing continues to evolve because the business environment itself is changing. Globalisation, technology, regulation, and rising stakeholder expectations have expanded the work and responsibilities of auditors.</p>
<h2>Major Contemporary Issues</h2>
<p>Use of Technology</p>
<p>Auditors now use computer-assisted audit techniques, data analytics, and increasingly artificial intelligence tools to test transactions and identify unusual patterns.</p>
<p>Cybersecurity and Digital Risk</p>
<p>Because organisations store large volumes of data electronically, auditors pay greater attention to access controls, system integrity, and cyber incidents.</p>
<p>Fraud and the Expectation Gap</p>
<p>The public often expects auditors to detect all fraud. However, an audit provides reasonable assurance, not a guarantee.</p>
<p>Independence and Ethics</p>
<p>Pressure from clients, provision of non-audit services, and familiarity threats may weaken perceived independence if not properly managed.</p>
<p>Sustainability and ESG Reporting</p>
<p>Organisations increasingly report environmental, social, and governance information. This has created growing demand for assurance over non-financial data.</p>
<p>Remote Auditing and Digital Evidence</p>
<p>Virtual meetings, shared data rooms, and remote stock observations have become more common in modern audit practice.</p>
<p>Going Concern and Business Uncertainty</p>
<p>Economic shocks, inflation, exchange-rate volatility, and liquidity problems affect audit judgement and reporting.</p>
<p>Audit Quality and Firm Regulation</p>
<p>Regulators increasingly expect stronger quality management systems, better documentation, and closer supervision within audit firms.</p>
<p>Forensic and Investigative Work</p>
<p>Businesses increasingly require special investigations into fraud, corruption, and financial misconduct.</p>
<p>Global Convergence of Standards</p>
<p>International accounting and auditing standards encourage comparability across countries.</p>
<h2>Contemporary Issues and Their Implications</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Issue</th>
<th>Implication for Auditors</th>
</tr>
</thead>
<tbody>
<tr>
<td>Data analytics and AI</td>
<td>Need for stronger IT knowledge, validation of automated outputs, and careful professional judgement</td>
</tr>
<tr>
<td>Cybersecurity</td>
<td>Greater attention to IT controls, data protection, and business continuity</td>
</tr>
<tr>
<td>ESG / sustainability assurance</td>
<td>Expansion of assurance services beyond traditional financial statements</td>
</tr>
<tr>
<td>Independence threats</td>
<td>More safeguards, ethical review, and transparency over relationships with clients</td>
</tr>
<tr>
<td>Expectation gap</td>
<td>Better communication of what an audit can and cannot do</td>
</tr>
</tbody>
</table>`
  },
  {
    id: 1999,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'COST AND MANAGEMENT',
    subtopic: 'Cost And Management',
    summary_60s: 'Introduction, cost concepts, materials, labour, overheads, job costing, costing techniques, cost-volume-profit analysis, budgeting, and investment appraisal. Overview Cost and management accounting support planning, control, and decision-making within an organisation. These topic',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Cost And Management in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Introduction, cost concepts, materials, labour, overheads, job costing, costing techniques, cost-volume-profit analysis, budgeting, and investment appraisal.</p>
<h1 style="text-align:center"><strong>Overview</strong></h1>
<p>Cost and management accounting support planning, control, and decision-making within an organisation. These topics move from basic definitions to techniques used for measuring cost, controlling resources, and evaluating business decisions.</p>
<h2 style="text-align:center"><strong>Nature and Scope of Cost Accounting</strong></h2>
<p>Cost accounting is the branch of accounting concerned with recording, classifying, analysing, and controlling the cost of producing goods or rendering services. It focuses on how much is spent, why it is spent, and how cost can be reduced without lowering quality.</p>
<p>It:</p>
<ul>
<li>measures the cost of materials, labour, and overhead used in production or service delivery,</li>
<li>provides cost information for pricing, planning, stock valuation, and performance evaluation,</li>
<li>helps management identify waste, inefficiency, and avoidable losses, and</li>
<li>covers the collection of cost data, analysis, control, reporting, and support for decision-making.</li>
</ul>
<h2 style="text-align:center"><strong>Management Accounting</strong></h2>
<p>Management accounting uses accounting information, statistics, and analysis to assist managers in planning, controlling operations, and making decisions. It is wider in scope than cost accounting because it also makes use of budgets, ratios, forecasts, and non-financial information.</p>
<table border="1" style="width:450px">
<thead>
<tr>
<th>Feature</th>
<th>Cost Accounting</th>
<th>Management Accounting</th>
<th>Financial Accounting</th>
</tr>
</thead>
<tbody>
<tr>
<td>Main focus</td>
<td>Ascertainment and control of cost</td>
<td>Planning, control, and decision-making</td>
<td>Recording overall financial results</td>
</tr>
<tr>
<td>Users</td>
<td>Internal managers and supervisors</td>
<td>Internal managers at all levels</td>
<td>Owners, investors, and other external users</td>
</tr>
<tr>
<td>Time orientation</td>
<td>Current and past cost records</td>
<td>Present and future oriented</td>
<td>Historical reporting period</td>
</tr>
<tr>
<td>Rules</td>
<td>Flexible internal rules</td>
<td>Flexible internal rules</td>
<td>Guided by accounting standards</td>
</tr>
<tr>
<td>Output</td>
<td>Cost sheets and cost reports</td>
<td>Budgets, forecasts, and analytical reports</td>
<td>Income statement, statement of financial position, and cash flow statement</td>
</tr>
</tbody>
</table>
<h1 style="text-align:center"><strong>Basic Elements of Cost</strong></h1>
<h2>Cost Terminologies and Components of Cost</h2>
<p>A cost is the amount of resources sacrificed to achieve a specific objective. Important terms include cost unit, cost centre, profit centre, direct cost, indirect cost, prime cost, and conversion cost.</p>
<table border="1" style="width:450px">
<thead>
<tr>
<th>Term</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cost unit</td>
<td>The unit of product or service for which cost is measured, for example a bag of cement or a passenger kilometre</td>
</tr>
<tr>
<td>Cost centre</td>
<td>A location, person, or machine for which costs are collected</td>
</tr>
<tr>
<td>Direct cost</td>
<td>A cost that can be conveniently traced to a cost unit, such as direct materials and direct labour</td>
</tr>
<tr>
<td>Indirect cost</td>
<td>A cost that cannot be conveniently traced to one unit and is therefore treated as overhead</td>
</tr>
<tr>
<td>Prime cost</td>
<td>Direct materials + direct labour + direct expenses</td>
</tr>
<tr>
<td>Conversion cost</td>
<td>Direct labour + production overhead; the cost of converting materials into finished output</td>
</tr>
</tbody>
</table>
<h2>Cost Classification and Cost Behaviour</h2>
<p>Costs may be classified in different ways:</p>
<ul>
<li><strong>By element:</strong> materials, labour, and expenses</li>
<li><strong>By traceability:</strong> direct and indirect costs</li>
<li><strong>By function:</strong> production, administration, selling, and distribution</li>
<li><strong>By behaviour:</strong> fixed, variable, and semi-variable costs</li>
<li><strong>By time:</strong> historical costs and predetermined costs such as standard or budgeted costs</li>
<li><strong>By controllability:</strong> controllable and uncontrollable costs</li>
<li><strong>By decision relevance:</strong> relevant, irrelevant, sunk, and opportunity costs</li>
<li><strong>By accounting treatment:</strong> product costs and period costs</li>
</ul>
<h2>Cost Estimation Techniques</h2>
<p>Methods of estimating cost include:</p>
<ul>
<li><strong>High-low method:</strong> estimates variable cost per unit from the highest and lowest activity levels</li>
<li><strong>Scatter graph:</strong> plots observations to show the likely cost line</li>
<li><strong>Engineering method:</strong> uses technical study of input requirements</li>
<li><strong>Account analysis:</strong> studies each account and classifies it according to behaviour</li>
<li><strong>Regression analysis:</strong> a more refined statistical method where data are available</li>
</ul>
<h1 style="text-align:center"><strong>Material Costing</strong></h1>
<p>Material costing deals with the purchase, receipt, storage, and issue of raw materials and supplies used in production. Effective material control helps to prevent overstocking, stock-outs, theft, and unnecessary carrying cost.</p>
<h2>Main Stages in Material Control</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Stage</th>
<th>Main Activities and Records</th>
</tr>
</thead>
<tbody>
<tr>
<td>Purchasing</td>
<td>Purchase requisition, supplier selection, purchase order, follow-up, and price comparison</td>
</tr>
<tr>
<td>Receipt</td>
<td>Inspection of quantity and quality, goods received note, and posting to stores records</td>
</tr>
<tr>
<td>Storage</td>
<td>Safe custody in store, bin cards, stores ledger, codification, and proper shelving</td>
</tr>
<tr>
<td>Issuance</td>
<td>Materials requisition note, transfer note, return note, and charging to jobs or departments</td>
</tr>
</tbody>
</table>
<p>Important points in material control include:</p>
<ul>
<li>obtaining the right quality, right quantity, right price, right source, and right time,</li>
<li>separating duties among ordering, receiving, storing, and accounting staff, and</li>
<li>identifying damaged or obsolete stock quickly so that losses can be controlled.</li>
</ul>
<h1 style="text-align:center"><strong>Quantitative Models for Material and Stock Controls</strong></h1>
<h2>Inventory-Related Costs and Stock Control</h2>
<p>Important inventory costs include:</p>
<ul>
<li>
<p><strong>Ordering cost:</strong> the cost of placing and processing orders</p>
</li>
<li>
<p><strong>Carrying or holding cost:</strong> storage, insurance, spoilage, rent, and cost of capital tied up in stock</p>
</li>
<li>
<p><strong>Stock-out cost:</strong> losses resulting from production stoppage, emergency purchases, or lost sales</p>
</li>
<li>
<p><strong>Purchase cost:</strong> the amount paid for the inventory itself</p>
</li>
</ul>
<p>The aim of stock control is to maintain enough materials for smooth operation without keeping excessive investment in inventory.</p>
<h2>Stock Control Tools</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Control Tool</th>
<th>Purpose / Formula</th>
</tr>
</thead>
<tbody>
<tr>
<td>EOQ</td>
<td>Economic Order Quantity minimises ordering and carrying costs. <strong>EOQ = √(2AO/C)</strong>, where <strong>A = annual demand</strong>, <strong>O = ordering cost per order</strong>, and <strong>C = carrying cost per unit per year</strong></td>
</tr>
<tr>
<td>Re-order level</td>
<td>The stock level at which a fresh order should be placed; commonly, maximum usage × maximum lead time</td>
</tr>
<tr>
<td>Minimum level</td>
<td>The lowest safe stock level before disruption occurs</td>
</tr>
<tr>
<td>Maximum level</td>
<td>The highest desirable stock level to avoid overstocking</td>
</tr>
<tr>
<td>ABC analysis</td>
<td>Classifies stock by value and management attention: A items are few but high value, while C items are many but low value</td>
</tr>
<tr>
<td>Perpetual inventory system</td>
<td>Stock records are updated continuously, often with periodic stock verification</td>
</tr>
</tbody>
</table>
<h2>Valuation of Inventory</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Method</th>
<th>Meaning</th>
<th>Simple Point</th>
</tr>
</thead>
<tbody>
<tr>
<td>FIFO</td>
<td>First items purchased are assumed to be issued first</td>
<td>Closing stock reflects recent prices more closely</td>
</tr>
<tr>
<td>Weighted average</td>
<td>Issues are priced at the average cost of units available</td>
<td>Smooths price fluctuations</td>
</tr>
<tr>
<td>Specific identification</td>
<td>Actual cost is traced to specific units</td>
<td>Useful for distinct high-value items</td>
</tr>
<tr>
<td>Standard price</td>
<td>Materials are issued at a predetermined standard cost</td>
<td>Variance analysis is then used</td>
</tr>
</tbody>
</table>
<p>Efficiency in material cost management improves when waste is reduced, pilferage is controlled, purchases are made economically, and stock records are kept accurate and current.</p>
<h1 style="text-align:center"><strong>Labour Costing</strong></h1>
<p>Labour costing is concerned with recording, controlling, and rewarding the human effort used in production or service delivery. Labour may be direct or indirect depending on whether it can be traced to output.</p>
<h2>Labour Control</h2>
<p>Labour control involves:</p>
<ul>
<li><strong>time keeping,</strong> which records attendance using clock cards, biometric systems, or attendance registers,</li>
<li><strong>time booking,</strong> which records the time spent on specific jobs or operations,</li>
<li><strong>payroll preparation,</strong> which ensures correct wages, deductions, and approvals,</li>
<li>analysis of <strong>idle time</strong> as normal or abnormal so that avoidable causes can be controlled,</li>
<li>proper authorisation of <strong>overtime</strong> because it may increase labour cost and create fatigue, and</li>
<li>monitoring <strong>labour turnover,</strong> since a high rate increases recruitment and training cost.</li>
</ul>
<h2>Labour Remuneration Methods</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Method</th>
<th>Meaning</th>
<th>Main Merit / Caution</th>
</tr>
</thead>
<tbody>
<tr>
<td>Time rate</td>
<td>Wages are paid according to hours worked</td>
<td>Simple and suitable where quality matters, but may not strongly encourage speed</td>
</tr>
<tr>
<td>Piece rate</td>
<td>Wages are linked to units produced</td>
<td>Encourages output but may affect quality if not supervised</td>
</tr>
<tr>
<td>Guaranteed time rate with bonus</td>
<td>A basic wage is guaranteed and a bonus is added for efficiency</td>
<td>Balances security and motivation</td>
</tr>
<tr>
<td>Halsey plan</td>
<td>Worker shares part of the time saved against standard time</td>
<td>Reward rises with efficiency while management also benefits from time saved</td>
</tr>
<tr>
<td>Rowan plan</td>
<td>Bonus is based on time saved as a proportion of standard time</td>
<td>Prevents excessively large bonuses</td>
</tr>
</tbody>
</table>
<p><strong>Formula reminder:</strong></p>
<p><strong>Labour cost per unit = total labour cost ÷ output</strong></p>
<p>Labour turnover may be measured using the separation, replacement, or flux method depending on the requirement of the question.</p>
<h1 style="text-align:center"><strong>Overhead Cost</strong></h1>
<p>Overheads are indirect costs that cannot be directly traced to a single unit of output. They include indirect materials, indirect labour, and indirect expenses.</p>
<h2>Treatment of Overhead</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Process</th>
<th>Explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Allocation</td>
<td>Charging the whole of an overhead item directly to one cost centre when it fully belongs there</td>
</tr>
<tr>
<td>Apportionment</td>
<td>Sharing an overhead cost among cost centres on a fair basis such as floor area, machine hours, or labour hours</td>
</tr>
<tr>
<td>Re-apportionment</td>
<td>Redistributing service department costs to production departments</td>
</tr>
<tr>
<td>Absorption</td>
<td>Charging overhead from cost centres to units of output using a rate such as per labour hour, machine hour, or percentage of direct wages</td>
</tr>
</tbody>
</table>
<h2>Types of Overhead</h2>
<ul>
<li><strong>Production overhead:</strong> relates to factory operations</li>
<li><strong>Administration overhead:</strong> relates to general management and office functions</li>
<li><strong>Selling overhead:</strong> arises from creating demand and securing orders</li>
<li><strong>Distribution overhead:</strong> arises from warehousing and delivering finished goods</li>
</ul>
<p><strong>Over-absorption</strong> occurs when absorbed overhead is more than actual overhead, while <strong>under-absorption</strong> occurs when absorbed overhead is less than actual overhead.</p>
<h1 style="text-align:center"><strong>Job Costing</strong></h1>
<p>Job costing is a method used where work is carried out to customer specification or in distinct batches, such as printing, furniture making, building contracts, or repair work.</p>
<p>Its main features are:</p>
<ul>
<li>each job is treated as a separate cost unit,</li>
<li>a job cost sheet is prepared for every job,</li>
<li>direct materials, direct labour, and direct expenses are charged specifically to the job, and</li>
<li>production overhead is absorbed using an agreed rate.</li>
</ul>
<p><strong>Total job cost = direct materials + direct labour + direct expenses + absorbed production overhead</strong></p>
<h2>Features of Job Costing</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Feature</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Nature of production</td>
<td>Specific orders rather than continuous identical output</td>
</tr>
<tr>
<td>Cost ascertainment</td>
<td>Cost is determined separately for each job</td>
</tr>
<tr>
<td>Pricing</td>
<td>Useful for quoting prices and estimating profit on individual jobs</td>
</tr>
<tr>
<td>Documents</td>
<td>Job cost sheet, material requisitions, labour time records, and overhead absorption calculations</td>
</tr>
</tbody>
</table>
<h1 style="text-align:center"><strong>Costing Techniques</strong></h1>
<p>Two important costing techniques commonly compared are absorption costing and marginal costing.</p>
<h2>Absorption Costing and Marginal Costing</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Point of Difference</th>
<th>Absorption Costing</th>
<th>Marginal Costing</th>
</tr>
</thead>
<tbody>
<tr>
<td>Treatment of fixed production overhead</td>
<td>Included in product cost and carried in inventory</td>
<td>Treated as period cost and written off in full against the period</td>
</tr>
<tr>
<td>Inventory valuation</td>
<td>Includes fixed and variable production cost</td>
<td>Includes variable production cost only</td>
</tr>
<tr>
<td>Profit effect</td>
<td>Profit can change with stock level because some fixed overhead may be deferred in closing stock</td>
<td>Profit mainly follows sales volume because fixed cost is charged in the period</td>
</tr>
<tr>
<td>Usefulness</td>
<td>Useful for external reporting and total cost pricing</td>
<td>Useful for short-term decisions and CVP analysis</td>
</tr>
</tbody>
</table>
<p><strong>Contribution = Sales – Variable cost</strong></p>
<p>Contribution is the amount available to cover fixed cost and profit, and it is central to marginal costing.</p>
<h1 style="text-align:center"><strong>Cost Volume Profit Analysis</strong></h1>
<p>Cost-volume-profit analysis studies how changes in cost, selling price, and output affect contribution and profit. It is based on the relationship among sales, variable cost, fixed cost, and profit.</p>
<h2>Concepts in CVP Analysis</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Concept</th>
<th>Expression / Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Contribution</td>
<td>Sales – Variable cost</td>
</tr>
<tr>
<td>Profit</td>
<td>Contribution – Fixed cost</td>
</tr>
<tr>
<td>P/V ratio</td>
<td>Contribution ÷ Sales × 100%</td>
</tr>
<tr>
<td>Break-even point (units)</td>
<td>Fixed cost ÷ Contribution per unit</td>
</tr>
<tr>
<td>Break-even point (sales value)</td>
<td>Fixed cost ÷ P/V ratio</td>
</tr>
<tr>
<td>Margin of safety</td>
<td>Actual sales – Break-even sales</td>
</tr>
<tr>
<td>Target sales</td>
<td>(Fixed cost + desired profit) ÷ Contribution per unit, or equivalent sales-value form</td>
</tr>
</tbody>
</table>
<h2>Uses and Assumptions of CVP Analysis</h2>
<p>CVP analysis helps in:</p>
<ul>
<li>
<p>profit planning,</p>
</li>
<li>
<p>pricing decisions, and</p>
</li>
<li>
<p>determining the sales volume required to achieve a target profit.</p>
</li>
</ul>
<p>It assumes that:</p>
<ul>
<li>
<p>fixed cost remains constant within the relevant range,</p>
</li>
<li>
<p>variable cost per unit remains constant,</p>
</li>
<li>
<p>selling price remains constant, and</p>
</li>
<li>
<p>output equals sales.</p>
</li>
</ul>
<p>It is most reliable when the product mix is stable and the data used are realistic.</p>
<h1 style="text-align:center"><strong>Budgeting</strong></h1>
<p>A budget is a quantitative plan prepared for a future period. Budgeting turns objectives into practical financial and operational targets, while budgetary control compares actual performance with the plan and investigates differences.</p>
<h2>Importance of Budgeting</h2>
<p>Budgets help in:</p>
<ul>
<li>planning,</li>
<li>coordination,</li>
<li>communication,</li>
<li>motivation, and</li>
<li>control.</li>
</ul>
<p>Common budgets include sales, production, materials, labour, overhead, cash, and the master budget.</p>
<p>A <strong>cash budget</strong> forecasts cash receipts and cash payments over a period and shows the expected surplus or deficit of cash.</p>
<h2>Preparation of a Cash Budget</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Step</th>
<th>What to Do</th>
</tr>
</thead>
<tbody>
<tr>
<td>Opening balance</td>
<td>State the opening cash balance</td>
</tr>
<tr>
<td>Cash receipts</td>
<td>Add expected receipts such as cash sales, collections from debtors, loans, or sale of assets</td>
</tr>
<tr>
<td>Cash payments</td>
<td>List payments such as purchases, wages, overhead, capital expenditure, loan repayment, and drawings</td>
</tr>
<tr>
<td>Net cash flow</td>
<td>Compute net cash flow and closing cash balance for each month or period</td>
</tr>
<tr>
<td>Review</td>
<td>Identify periods of cash shortage or excess cash and suggest action</td>
</tr>
</tbody>
</table>
<p><strong>Important distinction:</strong> Profit is not the same as cash. A cash budget records only cash movements, whereas profit includes non-cash items and accrual adjustments.</p>
<h1 style="text-align:center"><strong>Investment Appraisal</strong></h1>
<p>Investment appraisal, also called capital budgeting, is the process of evaluating long-term projects such as the purchase of machinery, opening a new branch, or introducing a new product line.</p>
<p>Important ideas include:</p>
<ul>
<li>
<p><strong>initial outlay,</strong> which is the cash invested at the beginning of the project,</p>
</li>
<li>
<p><strong>relevant cash flows,</strong> which are future cash inflows and outflows arising from the investment decision, and</p>
</li>
<li>
<p><strong>time value of money,</strong> which means cash received today is worth more than the same cash received later.</p>
</li>
</ul>
<h2>Methods of Investment Appraisal</h2>
<table border="1" style="width:400px">
<thead>
<tr>
<th>Technique</th>
<th>Basic Rule / Meaning</th>
<th>Main Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td>Payback period</td>
<td>Time required for cash inflows to recover the initial investment</td>
<td>Simple and popular, but ignores profit after payback and may ignore time value of money in its basic form</td>
</tr>
<tr>
<td>Accounting rate of return (ARR)</td>
<td>Average annual accounting profit ÷ average or initial investment × 100%</td>
<td>Uses profit rather than cash and is easy to understand</td>
</tr>
<tr>
<td>Net present value (NPV)</td>
<td>Present value of inflows – present value of outflows; accept if positive</td>
<td>Recognises time value of money and is theoretically strong</td>
</tr>
<tr>
<td>Profitability index</td>
<td>Present value of inflows ÷ present value of outflows</td>
<td>Useful where funds are limited and projects must be ranked</td>
</tr>
</tbody>
</table>`
  },
  {
    id: 2000,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'NATURE OF ACCOUNTING',
    subtopic: 'Principles And Records',
    summary_60s: 'Accounting Principles And Records. OUTLINE Principles, concepts and conventions. Role of accounting records and information. Accounting Principles are the backbone of preparing financial statements. If any principle changes, the whole nature of financial accounting shifts. These ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Principles And Records in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Accounting Principles And Records.</p><p><strong>OUTLINE</strong></p><ul><li>Principles, concepts and conventions.</li><li>Role of accounting records and information.</li></ul><p><strong>Accounting Principles</strong> are the backbone of preparing financial statements. If any principle changes, the whole nature of financial accounting shifts.</p><p>These principles, based on concepts, conventions, and traditions, ensure financial statements are informative and reliable.</p><h2 style="text-align:center"><strong>Accounting Principles</strong></h2><p>These are the basic rules and guidelines that govern how financial transactions are recorded and reported.</p><p>Key principles include:</p><ul><li><strong>Accrual Accounting:</strong> Recognizing revenues and expenses when they are earned or incurred, regardless of when cash is received or paid.</li><li><strong>Going Concern:</strong> Assuming that the business will continue to operate in the foreseeable future.</li><li><strong>Matching Principle:</strong> Matching expenses with the revenues they generate.</li><li><strong>Consistency:</strong> Using the same accounting methods and procedures from period to period.</li><li><strong>Materiality:</strong> Focusing on information that is significant enough to influence the decisions of users.</li></ul><h2 style="text-align:center"><strong>Accounting Concepts</strong></h2><p><strong>1. Business Entity Concept</strong></p><p>Owners are separate from the business. Only business-related matters are recorded, ignoring the owner's other wealth.</p><p><strong>2. Going Concern Concept</strong></p><p>Financial statements assume the business will keep operating in the future without major parts being sold off.</p><p><strong>3. Money Measurement</strong></p><p>Financial statements only include information that can be expressed in monetary terms.</p><p><strong>4. Cost Concept</strong></p><p>Assets are recorded at their purchase cost. Accountants don't value assets based on future returns.</p><p><strong>5. Accruals Concept</strong></p><p>Revenue and expenses are recorded when earned or incurred, not when cash is exchanged. Advance payments are considered debts until claimed by the recipient.</p><p><strong>5. Matching Concept</strong></p><p>Expenses must be matched against the revenue they generate in the same period to determine net income.</p><p><strong>6. Dual Aspect Concept</strong></p><p>Every transaction has two sides: a debit and a credit, representing a receiver and a giver.</p><p><strong>7. Realization Concept</strong></p><p>Revenue is recognized when goods are delivered to the customer in exchange for valuable consideration.</p><p><strong>8. Materiality Convention</strong></p><p>Minor economic events that don't affect the financial statements should not be reported.</p><p><strong>9. Convention of Conservatism</strong></p><p>Income should not be anticipated, and all possible losses must be provided for. Assets should be valued at the lower of cost or market value.</p><p><strong>10. Consistency Convention</strong></p><p>Financial statement preparation methods must remain consistent to avoid profit distortion.</p><h2 style="text-align:center"><strong>Accounting Conventions</strong></h2><p>These are the customs or practices that have evolved over time to address practical issues in accounting. Key conventions include:</p><ul><li><strong>Conservatism:</strong> Exercising caution in recognizing revenues and anticipating losses.</li><li><strong>Full Disclosure:</strong> Providing all relevant information in financial statements.</li><li><strong>Consistency:</strong> Using the same accounting methods from period to period.</li><li><strong>Materiality:</strong> Disclosing only information that is significant to users.</li></ul><h2 style="text-align:center"><strong>Significance and Application</strong></h2><p><strong>1. Ensure Consistency:</strong></p><p>Principles, concepts, and conventions provide a standardized framework for accounting, ensuring consistency in financial reporting across different businesses and time periods.</p><p><strong>2. Enhance Reliability:</strong></p><p>They promote accuracy and reliability in financial information, making it trustworthy for decision-making.</p><p><strong>3. Facilitate Comparability:</strong></p><p>They enable users to compare financial information across different companies and industries.</p><p><strong>3. Support Informed Decisions:</strong></p><p>By providing a clear and consistent picture of a company's financial position and performance, they aid in making informed investment, lending, and management decisions.</p><h2 style="text-align:center"><strong>Roles of Accounting Records</strong></h2><p>Accounting and bookkeeping play essential roles in the financial industry. The following are roles of accounting records and information.</p><ul><li>Providing a written record necessary for proper business conduct.</li><li>Assisting in management decision-making with reliable financial records.</li><li>Enabling businesses to ascertain profits and losses during a trading period.</li><li>Showing how a business stands with its customers through proper record-keeping.</li><li>Facilitating interfirm comparisons.</li><li>Displaying assets and liabilities.</li><li>Assisting in tax assessment.</li></ul>`
  },
  {
    id: 2001,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DOUBLE ENTRY PRINCIPLES',
    subtopic: 'Principles of Double Entry',
    summary_60s: 'OUTLINES Functions of source documents. Books of original entry. Accounting equation. Types and treatment of errors. Uses of suspense account. In accounting, Debit and Credit are the real dynamic duo. According to the "Principle of Double Entry," they always work together to trac',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Principles of Double Entry in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<h2><strong>OUTLINES</strong></h2><ul><li>Functions of source documents.</li><li>Books of original entry.</li><li>Accounting equation.</li><li>Types and treatment of errors.</li><li>Uses of suspense account.</li></ul><p>In accounting, Debit and Credit are the real dynamic duo. According to the "Principle of Double Entry," they always work together to track every transaction. Master their teamwork, and you'll conquer any accounting challenge!</p><h2 style="text-align:center"><strong>Principle of Double Entry</strong></h2><p>This principle states that every transaction has two sides: a receiver and a giver. For every debit transaction, there must be a credit transaction, and vice versa.</p><p>This ensures that the accounting equation stays balanced:</p><p><strong>Assets = Liabilities + Equity</strong></p><ul><li><strong>Assets</strong>: What the company owns.</li><li><strong>Liabilities</strong>: What the company owes.</li><li><strong>Equity</strong>: Owner’s stake after debts.</li></ul><p><strong>Example:</strong></p><p><em>Jan 2: Paid N200 cash for rent.</em></p><ul><li><strong>Accounts Involved:</strong> Cash account and Rent account.</li><li><strong>Explanation:</strong> The rent account receives the money from the cash account.</li></ul><p><strong>Action:</strong></p><ul><li>Dr Rent account (receiver).</li><li>Cr Cash account (giver).</li></ul><h2 style="text-align:center"><strong>Source Documents</strong></h2><p>Source documents are the original records of financial transactions. They provide evidence that a transaction has occurred and serve as the basis for accounting entries.</p><p><strong>Some source documents include:</strong></p><ul><li><strong>Invoice:</strong> Complete information about the goods or products sent to the buyer.</li><li><strong>Credit Note:</strong> Used for damaged goods or incorrect orders. It corrects an overcharge.</li><li><strong>Receipts:</strong> Evidence of cash received.</li><li><strong>Debit Note:</strong> The opposite of a credit note. It corrects an undercharge for goods not initially charged.</li><li><strong>Petty Cash Vouchers:</strong> Covers payments made to the petty cash book.</li><li><strong>Statement of Accounts:</strong> Shows all debits and credits made to the account, often sent by the seller to the buyer.</li><li><strong>Cheque</strong>: Authorizes a payment from a bank account.</li><li><strong>Payment Voucher</strong>: Documents payments made for goods or services.</li></ul><p><strong>Purpose and Functions of Source Documents:</strong></p><ul><li><strong>Provide evidence of transactions:</strong> Serve as proof that a transaction occurred.</li><li><strong>Support for accounting entries:</strong> Used to record transactions in the accounting system.</li><li><strong>Internal control:</strong> Help prevent errors and fraud.</li><li><strong>Audit trail:</strong> Provide a traceable record of transactions.</li><li><strong>Legal requirements:</strong> May be required for tax and legal purposes.</li></ul><table border="2" style="width:500px"><thead><tr><th style="width:149px"><strong>Source Document</strong></th><th style="width:336px"><strong>Function</strong></th></tr></thead><tbody><tr><td><strong>Invoice</strong></td><td>Records a sale or purchase on credit.</td></tr><tr><td><strong>Receipt</strong></td><td>Serves as proof of payment received.</td></tr><tr><td><strong>Credit Note</strong></td><td>Records a reduction in the amount owed by a customer, often due to a return or allowance.</td></tr><tr><td><strong>Cheque</strong></td><td>Authorizes a payment from a bank account.</td></tr><tr><td><strong>Payment Voucher</strong></td><td>Documents payments made for goods or services.</td></tr></tbody></table><h2 style="text-align:center"><strong>Books of Original Entry</strong></h2><p>Books of original entry are used to record financial transactions initially before posting them to ledger accounts. Each book corresponds to a specific type of transaction.</p><p>Also called subsidiary books, these do not form part of the double entry. Transactions are first recorded here before being posted to the ledger. Reasons for this include:</p><ul><li>Keeping track of creditors and debtors.</li><li>Knowing total sales and purchases.</li></ul><p><strong>1. Sales Day Book</strong></p><p>This book records credit sales (goods sold on credit).</p><table border="1" style="width:400px"><tbody><tr><th>Date</th><th>Particulars</th><th>F</th><th>Details (₦)</th><th>Total (₦)</th></tr><tr><td>19 May</td><td>AUSTIN &amp; CO 205 packets of salt</td><td>SL</td><td>500</td><td>102,500</td></tr><tr><td>20 May</td><td>PHOENIX INC. 20 cartons of noodles</td><td>SL</td><td>3,000</td><td>60,000</td></tr><tr><td><strong>Transfer to sales account</strong></td><td><strong>162,500</strong></td></tr></tbody></table><p><strong>2. Purchase Day Book</strong></p><p>This book records credit purchases (goods bought on credit).</p><table border="1" style="width:400px"><tbody><tr><th>Date</th><th>Particulars</th><th>F</th><th>Details (₦)</th><th>Total (₦)</th></tr><tr><td>19 May</td><td>JUSTIN LTD 205 packets of salt</td><td>PL</td><td>500</td><td>102,500</td></tr><tr><td>20 May</td><td>UPTOWN PLC 20 cartons of noodles</td><td>PL</td><td>3,000</td><td>60,000</td></tr><tr><td><strong>Transfer to sales account</strong></td><td><strong>162,500</strong></td></tr></tbody></table><p><strong>3. Sales Returns (Returns Inward Journal)</strong></p><ul><li>Keeps track of goods returned by customers.</li><li>Prepared by the seller.</li></ul><p><strong>4. Purchase Returns (Returns Outward Journal):</strong></p><ul><li>Keeps track of goods returned to suppliers.</li><li>Prepared by the buyer.</li></ul><p><strong>5. General Journal:</strong></p><ul><li>Used for recording daily transactions that don't fit in other subsidiary books.</li><li>Also used for correcting errors in other journals.</li></ul><p><strong>6. Cash Book:</strong></p><ul><li>Records both cash and bank transactions.</li><li>Often has separate columns for cash receipts and cash payments.</li></ul><p><strong>Note:</strong> The format for preparing Sales Return and Purchase Return is similar to the others.</p><h2 style="text-align:center"><strong>Accounting Equation</strong></h2><p>Understanding this equation is crucial for any accountant. It is:</p><p><strong>ASSET = CAPITAL + LIABILITIES</strong></p><p>Where:</p><ul><li><strong>Assets:</strong> Properties of the business.</li><li><strong>Capital:</strong> Amount invested in the business.</li><li><strong>Liabilities:</strong> Amount owed by the business to outsiders.</li></ul><p><strong>Note:</strong> Both sides of this equation must be equal.</p><p><strong>Example:</strong></p><p>A company purchases equipment for cash.</p><p><strong>Effect</strong>:</p><ul><li>Decrease in cash (asset).</li><li>Increase in equipment (asset).</li><li>No change in the total assets, so the equation remains balanced.</li></ul><p>The accounting equation can also be expressed as:</p><ol><li>Assets = Capital.</li><li>Assets = Capital + Liabilities.</li><li>Capital = Assets - Liabilities.</li><li>Liabilities = Assets - Capital.</li></ol><h2 style="text-align:center"><strong>SUSPENSE ACCOUNT</strong></h2><p>This is only prepared when errors that affect the trial balance occur. Suspense accounts record the differences until the errors are dealt with and corrected. The correction will be made with one account debited/credited and the corresponding account credited/debited in the suspense account.</p><p><strong>Example</strong></p><p>1. Receipt from Dulyemi of N1120 was posted to the cash book but not credited to any account.</p><p>NB: this error will affect the trial balance as it is a one-sided omission.</p><p><strong>Action Required</strong></p><p>DR Suspense account N1120</p><p>CR Dulyemi account N1120</p><p><strong>JOURNAL</strong></p><table border="1"><thead><tr><th> </th><th>₦</th><th>₦</th></tr></thead><tbody><tr><td>Dulyemi Account</td><td>1120</td></tr><tr><td>Suspense Account</td><td>1120</td></tr></tbody></table><p>2. Sales of N200 to Aboki was omitted from the books altogether</p><p>NB: this error will not affect the trial balance as it is an error of omission. To correct this, you simply add the omitted figures back to their respective account.</p><p>3. Sales day book was overcast by N20</p><p>NB: This will affect the trial balance.</p><p>Action Required</p><p>DR Sales account</p><p>CR Suspense account</p><p><strong>JOURNAL</strong></p><p>The ledger, once understood, is no mere record of numbers but a potent financial compass. Within its pages lies the story of any business, its ups and downs laid bare. Remember this, wield this tool with confidence: for the ledger will grant you the power to navigate any financial storm and steer your future toward prosperity.</p>`
  },
  {
    id: 2002,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'NIGERIAN TAXATION',
    subtopic: 'Principles Of Taxation',
    summary_60s: 'Taxation is a compulsory levy imposed by government on persons, income, profits, property, transactions, or goods and services for the purpose of raising revenue, redistributing income, regulating the economy, and providing public services. In Nigeria, taxation operates within a ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Principles Of Taxation in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Taxation is a <strong>compulsory levy imposed by government on persons, income, profits, property, transactions, or goods and services</strong> for the purpose of raising revenue, redistributing income, regulating the economy, and providing public services. In Nigeria, taxation operates within a federal system; therefore, taxing powers and collection responsibilities are shared among the <strong>federal</strong>, <strong>state</strong>, and <strong>local government</strong> levels.</p>
<p>New Law Update</p>
<p>Nigeria’s current reform framework is built around four major tax reform Acts signed in 2025:</p>
<ul>
<li><strong>Nigeria Tax Act, 2025 (NTA)</strong></li>
<li><strong>Nigeria Tax Administration Act, 2025 (NTAA)</strong></li>
<li><strong>Nigeria Revenue Service (Establishment) Act, 2025 (NRSA)</strong></li>
<li><strong>Joint Revenue Board (Establishment) Act, 2025 (JRBA)</strong></li>
</ul>
<p>The <strong>Nigeria Revenue Service (NRS)</strong> replaces the former <strong>Federal Inland Revenue Service (FIRS)</strong>. The <strong>Nigeria Tax Administration Act, 2025</strong> now provides a broad administrative framework across federal, state, and local tax authorities, while the <strong>Nigeria Tax Act, 2025</strong> consolidates many tax rules into one principal tax statute.</p>
<h2>History of Tax and Taxation in Nigeria</h2>
<p>The history of taxation in Nigeria may be studied under four broad stages:</p>
<ul>
<li>
<p><strong>Pre-colonial taxation</strong></p>
</li>
<li>
<p><strong>Colonial taxation</strong></p>
</li>
<li>
<p><strong>Post-independence institutional development</strong></p>
</li>
<li>
<p><strong>Modern tax reform</strong></p>
</li>
</ul>
<p>Pre-colonial Period</p>
<p>Before British colonial rule, many Nigerian communities already paid <strong>tributes</strong>, <strong>customary dues</strong>, <strong>produce levies</strong>, <strong>cattle tax (jangali)</strong> in some northern areas, and rendered <strong>community labour obligations</strong>. These payments were enforced mainly by traditional rulers and local institutions, although they were not administered under a single national tax law.</p>
<p>Colonial Period</p>
<p>Modern taxation in Nigeria is often traced to the <strong>Stamp Duties Proclamation of 1903</strong> in the Northern Protectorate. The <strong>Native Revenue Proclamation of 1906</strong> further systematised native taxation. After the 1914 amalgamation, the <strong>Native Revenue Ordinance of 1917</strong> became a major colonial revenue law and was later extended more broadly.</p>
<p>Post-Independence Institutional Development</p>
<p>In 1943, the <strong>Nigerian Inland Revenue Department</strong> was separated from the British West Africa system. In 1958, it became the <strong>Federal Board of Inland Revenue (FBIR)</strong>. Later tax legislation strengthened federal tax administration and dispute resolution, and in 1993 the <strong>Federal Inland Revenue Service (FIRS)</strong> emerged as the operational arm of the FBIR.</p>
<p>Modern Reforms</p>
<p>From 2004 onward, reforms focused on tax policy, automation, taxpayer registration, dispute resolution, and administrative efficiency. The <strong>FIRS (Establishment) Act, 2007</strong> gave FIRS greater autonomy. The latest reform wave came in 2025, when four major reform Acts were enacted, creating the present framework.</p>
<p>Quick Timeline</p>
<ul>
<li>
<p><strong>Pre-colonial:</strong> Customary tributes and local dues</p>
<p><em>Importance:</em> Shows that taxation existed before colonial rule.</p>
</li>
<li>
<p><strong>1903:</strong> Stamp Duties Proclamation</p>
<p><em>Importance:</em> Commonly cited as the beginning of modern taxation in Nigeria.</p>
</li>
<li>
<p><strong>1906:</strong> Native Revenue Proclamation</p>
<p><em>Importance:</em> Systematised native taxes.</p>
</li>
<li>
<p><strong>1917:</strong> Native Revenue Ordinance</p>
<p><em>Importance:</em> Formalised colonial direct taxation.</p>
</li>
<li>
<p><strong>1943–1958:</strong> Inland Revenue Department / FBIR</p>
<p><em>Importance:</em> Built the federal tax structure.</p>
</li>
<li>
<p><strong>1993:</strong> FIRS operational role</p>
<p><em>Importance:</em> Improved federal tax administration.</p>
</li>
<li>
<p><strong>2007:</strong> FIRS autonomy law</p>
<p><em>Importance:</em> Marked a major administrative reform.</p>
</li>
<li>
<p><strong>2025/2026:</strong> NTA, NTAA, NRSA, JRBA</p>
<p><em>Importance:</em> Established the current tax reform framework.</p>
</li>
</ul>
<h2>Tax Authorities in Nigeria</h2>
<p>Because Nigeria is a federation, tax authority is not concentrated in one body. It is shared across the <strong>federal</strong>, <strong>state</strong>, and <strong>local government</strong> levels.</p>
<p>Main Tax Authorities</p>
<p>Federal Level</p>
<ul>
<li>
<p><strong>Nigeria Revenue Service (NRS)</strong></p>
</li>
<li>
<p>Responsible for the <strong>assessment, collection, and accounting</strong> of federal taxes and revenues.</p>
</li>
</ul>
<p>National Coordination / Dispute Framework</p>
<ul>
<li>
<p><strong>Joint Revenue Board (JRB)</strong></p>
</li>
<li>
<p>Promotes <strong>harmonisation</strong> and <strong>coordination</strong> of revenue administration across the federation.</p>
</li>
<li>
<p>Also linked to the <strong>Tax Appeal Tribunal</strong> structure.</p>
</li>
</ul>
<p>State Level</p>
<ul>
<li>
<p><strong>State Internal Revenue Service (SIRS)</strong> / <strong>FCT-IRS</strong></p>
</li>
<li>
<p>Responsible especially for taxes on <strong>individuals</strong> and other state-administered taxes.</p>
</li>
</ul>
<p>Local Government Level</p>
<ul>
<li>
<p><strong>Local Government Revenue Committee</strong></p>
</li>
<li>
<p>Responsible for local taxes, fines, and rates within local jurisdiction.</p>
</li>
</ul>
<p>Federal Tax Authorities</p>
<p>Under the current regime, the main federal tax authority is the <strong>Nigeria Revenue Service (NRS)</strong>. Its duty is to assess taxpayers and to collect and account for taxes and revenues accruing to the Government of the Federation.</p>
<p>State Tax Authorities</p>
<p>Each state has a <strong>State Internal Revenue Service (SIRS)</strong>. The state service assesses <strong>individuals, estates, trusts, settlements, communities, and families</strong>, and collects taxes due to the state where the law makes the state the proper collecting authority.</p>
<p>Local Government Tax Authorities</p>
<p>Every local government area has a <strong>Local Government Revenue Committee</strong>. Its role is limited mainly to local taxes, fines, fees, and rates rather than broad-based income taxes.</p>
<p>Legacy Term to Remember</p>
<p>Older notes may refer to <strong>FIRS</strong> as the federal tax authority. Under the new framework, the current federal body is the <strong>Nigeria Revenue Service (NRS)</strong>. In an examination, you may write:</p>
<p><strong>“Formerly FIRS, now NRS under the 2025 reform law.”</strong></p>
<h2>Tax Administration in Nigeria</h2>
<p>Tax administration refers to the <strong>machinery, procedures, and institutions</strong> used to register taxpayers, assess tax, collect tax, enforce compliance, and resolve disputes.</p>
<p>Basic Elements of Tax Administration</p>
<ul>
<li>
<p>Registration of taxable persons and issuance of <strong>Tax ID</strong></p>
</li>
<li>
<p>Filing of returns by individuals, companies, and other taxable persons</p>
</li>
<li>
<p>Assessment of tax by the relevant authority</p>
</li>
<li>
<p>Payment, collection, recovery, and accounting for tax</p>
</li>
<li>
<p>Audit, investigation, penalties, and enforcement</p>
</li>
<li>
<p>Objection, appeal, and dispute resolution</p>
</li>
</ul>
<p>Jurisdiction by Level of Government</p>
<ul>
<li>
<p>The <strong>federal authority</strong> administers taxes and revenues accruing to the Federation.</p>
</li>
<li>
<p><strong>State services</strong> administer taxes due to the state, especially personal income tax of resident individuals.</p>
</li>
<li>
<p><strong>Local government revenue committees</strong> administer local taxes, rates, fines, and similar items within local jurisdiction.</p>
</li>
</ul>
<p>Typical Taxes Administered by Each Level</p>
<p>Federal</p>
<p>Examples include:</p>
<ul>
<li>
<p>Company income tax</p>
</li>
<li>
<p>Value added tax</p>
</li>
<li>
<p>Hydrocarbon tax</p>
</li>
<li>
<p>Petroleum profits tax</p>
</li>
<li>
<p>Development levy</p>
</li>
<li>
<p>Stamp duties on corporate instruments</p>
</li>
<li>
<p>Certain non-resident taxation and other federal revenues</p>
</li>
</ul>
<p>State / FCT</p>
<p>Examples include:</p>
<ul>
<li>
<p>Personal income tax under <strong>PAYE</strong></p>
</li>
<li>
<p>Direct assessment of individuals</p>
</li>
<li>
<p>Taxes on resident individuals</p>
</li>
<li>
<p>Capital gains and stamp duties of individuals</p>
</li>
<li>
<p>Other state taxes and levies authorised by law</p>
</li>
</ul>
<p>Local Government</p>
<p>Examples include:</p>
<ul>
<li>
<p>Tenement and property-related rates</p>
</li>
<li>
<p>Market and motor park fees</p>
</li>
<li>
<p>Shop and kiosk rates</p>
</li>
<li>
<p>Slaughter slab fees</p>
</li>
<li>
<p>Similar local rates and fines where enabled by law</p>
</li>
</ul>
<p>Simple Administrative Flow</p>
<ul>
<li>
<p>A taxable person registers and obtains a <strong>Tax ID</strong>.</p>
</li>
<li>
<p>Income or transactions are recorded and returns are filed.</p>
</li>
<li>
<p>The tax authority computes or reviews the liability and raises an assessment where necessary.</p>
</li>
<li>
<p>The taxpayer pays the amount due within the time allowed by law.</p>
</li>
<li>
<p>Where there is disagreement, the taxpayer may object and later appeal.</p>
</li>
</ul>
<p>New Law Update</p>
<p>Under the <strong>Nigeria Tax Administration Act, 2025</strong>, every taxable person must register with the relevant tax authority and obtain a <strong>Tax ID</strong>. A taxable person that permanently ceases business must notify the relevant tax authority for deregistration within <strong>30 days</strong> of cessation.</p>
<h2>Basis Periods</h2>
<p>A <strong>basis period</strong> is the period whose profits or income are used for tax assessment for a particular <strong>year of assessment</strong>. It is important because an incorrect basis period will lead to an incorrect tax liability.</p>
<p>General Rule</p>
<p>Under the <strong>Nigeria Tax Act, 2025</strong>, the assessable profits of a <strong>trade, business, profession, or vocation</strong> for a year of assessment are generally the profits of the <strong>accounting period immediately preceding that year of assessment</strong>.</p>
<p>New Business Rule</p>
<p>For a <strong>new business</strong>, the first year of assessment is treated specially. The assessable profits for that first year are the actual profits from the <strong>date of commencement in Nigeria</strong> to the <strong>end of the first accounting period</strong>. This replaces the old overlap-style commencement complications found in older notes.</p>
<p>Determination of Basis Periods</p>
<ul>
<li>
<p><strong>First year of assessment for a new business:</strong></p>
<p>From the date of commencement to the end of the first accounting period.</p>
</li>
<li>
<p><strong>Later years:</strong></p>
<p>The accounting period immediately preceding the year of assessment.</p>
</li>
<li>
<p><strong>Where accounting date changes:</strong></p>
<p>From the day after the last basis period to the new accounting date, and the taxable person must notify the relevant tax authority.</p>
</li>
<li>
<p><strong>Where business ceases:</strong></p>
<p>From the beginning of the accounting period to the date of cessation.</p>
</li>
</ul>
<p>Worked Illustration</p>
<p><strong>Example</strong></p>
<p>Assume a business starts on <strong>1 April 2026</strong> and prepares its first accounts to <strong>31 December 2026</strong>.</p>
<p><strong>First assessment basis period = 1 April 2026 to 31 December 2026</strong></p>
<p>If the accounting year remains <strong>1 January to 31 December</strong> thereafter, later assessments will follow the normal <strong>immediately-preceding accounting period</strong> rule.</p>
<h2>Computation of Tax Liabilities</h2>
<p><strong>Tax liability</strong> means the amount of tax legally payable by a taxpayer after applying the relevant tax law, exemptions, deductions, reliefs, and rates.</p>
<p>Basic Computation Steps</p>
<ul>
<li>
<p>Identify the taxpayer: individual, company, partnership, trustee, non-resident, etc.</p>
</li>
<li>
<p>Identify the source of income or taxable transaction.</p>
</li>
<li>
<p>Determine the correct basis period.</p>
</li>
<li>
<p>Compute gross income, turnover, gains, or profits.</p>
</li>
<li>
<p>Deduct allowable expenses and statutory deductions.</p>
</li>
<li>
<p>Subtract exempt income, capital allowances, losses, or eligible deductions where applicable.</p>
</li>
<li>
<p>Apply the correct tax rate.</p>
</li>
<li>
<p>Add any additional levy, minimum tax, or top-up tax where the law requires.</p>
</li>
</ul>
<p>Individual Tax Liability (Exam Method)</p>
<p>For an individual, begin with <strong>total income</strong>, subtract <strong>eligible deductions</strong>, and then apply the tax bands in the <strong>Fourth Schedule</strong> to the <strong>Nigeria Tax Act, 2025</strong>.</p>
<p>Eligible deductions include items such as:</p>
<ul>
<li>
<p><strong>Pension contributions</strong></p>
</li>
<li>
<p><strong>NHF contribution</strong></p>
</li>
<li>
<p><strong>NHIS contribution</strong></p>
</li>
<li>
<p><strong>Interest on loan for owner-occupied residential house</strong></p>
</li>
<li>
<p><strong>Life assurance premium</strong></p>
</li>
<li>
<p><strong>Rent relief</strong> subject to the applicable limit</p>
</li>
</ul>
<p>Individual Formula</p>
<p><strong>Total income – eligible deductions = chargeable income</strong></p>
<p><strong>Chargeable income × applicable graduated rates = income tax payable</strong></p>
<p>Worked Example: Individual Income Tax</p>
<p>Assume:</p>
<ul>
<li>
<p><strong>Gross employment / taxable income = ₦6,000,000</strong></p>
</li>
<li>
<p><strong>Eligible deductions = ₦800,000</strong></p>
</li>
</ul>
<p>Then:</p>
<p><strong>Chargeable income = ₦6,000,000 – ₦800,000 = ₦5,200,000</strong></p>
<p>Tax computation:</p>
<ul>
<li>
<p>First <strong>₦800,000 at 0%</strong> = <strong>₦0</strong></p>
</li>
<li>
<p>Next <strong>₦2,200,000 at 15%</strong> = <strong>₦330,000</strong></p>
</li>
<li>
<p>Remaining <strong>₦2,200,000 at 18%</strong> = <strong>₦396,000</strong></p>
</li>
</ul>
<p><strong>Total income tax payable = ₦726,000</strong></p>
<h2 style="text-align:center">Company Tax Liability</h2>
<p>For a company, first determine <strong>total profits</strong> and then apply the relevant company tax rules. Under the current Act, tax is charged at <strong>0% for a small company</strong> and <strong>30% for any other company</strong>. A <strong>development levy of 4%</strong> applies to the <strong>assessable profits</strong> of companies chargeable under the Act, except <strong>small companies</strong> and <strong>non-resident companies</strong>.</p>
<p>Company Formula</p>
<ul>
<li><strong>Gross profit / accounting profit</strong></li>
<li><strong>± tax adjustments</strong></li>
<li><strong>= adjusted profit</strong></li>
<li><strong>– capital allowances and allowable loss relief (where applicable)</strong></li>
<li><strong>= total profits / taxable profits</strong></li>
<li><strong>× company tax rate</strong></li>
<li><strong>+ development levy or other additional amounts where applicable</strong></li>
</ul>
<p>Worked Example: Company Tax</p>
<p>Assume:</p>
<ul>
<li>
<p><strong>Adjusted profit = ₦12,000,000</strong></p>
</li>
<li>
<p><strong>Capital allowance = ₦2,000,000</strong></p>
</li>
</ul>
<p>Then:</p>
<p><strong>Total profits = ₦12,000,000 – ₦2,000,000 = ₦10,000,000</strong></p>
<p><strong>Companies income tax at 30% = ₦3,000,000</strong></p>
<p>If, in this simplified example, <strong>assessable profits = ₦12,000,000</strong>, then:</p>
<p><strong>Development levy at 4% of assessable profits = ₦480,000</strong></p>
<p>Therefore:</p>
<p><strong>Total liability = ₦3,000,000 + ₦480,000 = ₦3,480,000</strong></p>
<p>Important Caution</p>
<p>If the company qualifies as a <strong>small company</strong>, the company income tax rate is <strong>0%</strong>. A small company is generally one with <strong>gross turnover not exceeding ₦50,000,000</strong> and <strong>fixed assets not exceeding ₦250,000,000</strong>, excluding certain professional service businesses.</p>
<p>Also note the <strong>effective tax rate / top-up tax</strong> rule for large companies and <strong>MNE groups</strong> where the effective tax rate falls below <strong>15%</strong>.</p>`
  },
  {
    id: 2003,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DOUBLE ENTRY PRINCIPLES',
    subtopic: 'Ledger and Trial Balance',
    summary_60s: 'Take a moment and think of your phone: it stores memories in the form of messages and photos.The Ledger is the phone for a business, recording every financial transaction in its digital or paper memory. Today, we learn to speak its language and unlock the financial stories it hol',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Ledger and Trial Balance in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Take a moment and think of your phone: it stores memories in the form of messages and photos.The Ledger is the phone for a business, recording every financial transaction in its digital or paper memory. Today, we learn to speak its language and unlock the financial stories it holds.</p><h2 style="text-align:center"><strong>Ledger And Its Classification</strong></h2><p>This is where books of original entry are finally recorded. It acts as a permanent record of all transactions and is used for double-entry book keeping.The ledger is classified into;</p><ul style="list-style-type:circle"><li><strong>Personal ledger</strong> ; this is for creditors and debtors only i.e purchase and sales ledger</li><li><strong>General ledger</strong>: this ledger is for expense account, income account, sales account, purchases account and assets account</li><li><strong>Private ledger</strong>: this is solely used for the capital and drawings account of the proprietor (business owner).</li><li><strong>Purchase ledger</strong>: this is the personal account of the suppliers and creditors.</li><li><strong>Sales ledger</strong>: this contains personal accounts of the customers and debtors.</li><li><strong>Nominal ledger</strong>: this is for recording accounts of losses, expenses, income, and gains.</li></ul><p><strong>Ledger Classifications:</strong></p><ul><li><strong>Personal Accounts</strong>: Related to individuals or entities (e.g., customers, suppliers).</li><li><strong>Real Accounts</strong>: Related to tangible or intangible assets (e.g., buildings, patents).</li><li><strong>Nominal Accounts</strong>: Related to income, expenses, gains, and losses.</li></ul><p><strong>Role of Double Entry in the Ledger</strong>:</p><ul><li><strong>Debit</strong>: Increases in assets and expenses; decreases in liabilities and income.</li><li><strong>Credit</strong>: Increases in liabilities and income; decreases in assets and expenses.</li></ul><h2 style="text-align:center"><strong>TRIAL BALANCE</strong></h2><p>The trial balance is a list that shows all debit and credit balances. It is extracted from the ledger and this is to show the accuracy of the ledger. There are certain rules to follow when preparing the trial balance;</p><ul style="list-style-type:circle"><li>All assets are to be debited (debit side DR).</li><li>All expenses are to be debited (debit side DR).</li><li>All liabilities are to be credited (credit side CR).</li><li>All incomes are to be credited (credit side CR).</li></ul><p>The trial balance has two main uses;</p><ul style="list-style-type:circle"><li>To test the accuracy of the double-entry.</li><li>It aids in the preparation of financial statements.</li></ul><p>A format is shown below:</p><table border="1" style="width:350px"><thead><tr><th>DETAILS</th><th>DR (₦)</th><th>CR (₦)</th></tr></thead><tbody><tr><td>Capital</td><td>XX</td><td>XX</td></tr><tr><td>Sales</td><td>XX</td><td>XX</td></tr><tr><td>Rent and Rates</td><td>XX</td><td>XX</td></tr><tr><td>Bad Debts</td><td>XX</td><td>XX</td></tr><tr><td>Plant and Machinery</td><td>XX</td><td>XX</td></tr><tr><td>Lighting</td><td>XX</td><td>XX</td></tr><tr><td><strong>TOTAL</strong></td><td>XX</td><td>XX</td></tr></tbody></table><p>NB: A Difference between the debit and the credit side indicates that there is an error. <strong>TYPES AND CORRECTION OF ERRORS</strong>Oftentimes, errors may occur when preparing accounts.They are in 2 categories;<strong>1. Errors that do not affect the trial balance;</strong> errors under this category include;</p><ul style="list-style-type:circle"><li>Error of omission: this is when transactions are completely omitted from the debit and credit side of the books. To correct this, the omitted amount is entered into the journal and posted accordingly.</li><li>Error of original entry: this is when a wrong amount is entered on the debit and credit side. To correct this, the difference between the correct amount and the wrong amount must be posted to the accounts.</li><li>Error of principle: this is when transactions are posted to the wrong class of account. i.e. delivery vehicle bought is recorded in the expenses account. To correct this, the transaction must be entered back into its original account.</li><li>Error of commission: this is when a transaction is recorded in the wrong person’s account. To correct this, you <strong> DR</strong> the original account and <strong> CR</strong> the wrong account.</li><li>Complete reversal of entry: this is when an account to be credited is debited and vice versa. To correct this, we multiply the figure by two and input the actual entries.</li></ul><p>2. <strong> Errors that affect the trial balance;</strong> errors under this category include;</p><ul style="list-style-type:circle"><li>Mis-posting of transaction.</li><li>Omission of transactions from one of two accounts.</li><li>Incorrect trial balance total.</li></ul>`
  },
  {
    id: 2004,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'ETHICS AND CASHBOOK',
    subtopic: 'Ethics In Accounting',
    summary_60s: 'Objectives To understand the key qualities an accountant must possess. To highlight the importance of ethics in the accounting profession. To identify regulatory bodies that enforce ethical standards. Ethics refers to principles or values applied when carrying out any activity. I',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Ethics In Accounting in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<h2><strong>Objectives</strong></h2><ul><li>To understand the key qualities an accountant must possess.</li><li>To highlight the importance of ethics in the accounting profession.</li><li>To identify regulatory bodies that enforce ethical standards.</li></ul><p>Ethics refers to principles or values applied when carrying out any activity.</p><p>In accounting, it is the qualities and attributes that must be upheld by an accountant when practicing or carrying out accounting related activities.</p><h2><strong>Qualities of an Accountant</strong></h2><p>A good and professional accountant must possess the following;</p><ul style="list-style-type:circle"><li>Honesty.</li><li>Integrity.</li><li>Transparency.</li><li>Objectivity.</li><li>Confidentiality.</li><li>Professional behavior.</li><li>Competence and due care.</li></ul><h2 style="text-align:center"><strong>Why Accountants Must Be Ethical</strong></h2><p>There are many reasons why an accountant must be ethical in his or her practice. It is beneficial both to the accountant, the clients, the profession and even the society in general as;</p><ul style="list-style-type:circle"><li>It increases public trust and confidence towards the accounting profession.</li><li>It ensures accuracy of financial statements when prepared.</li><li>It boosts the reputation of the accountant or the accounting firm.</li><li>It ensures safety of client assets and finances.</li></ul><h2 style="text-align:center"><strong>Regulatory Bodies</strong></h2><p>Various regulatory bodies and frameworks have been established to enforce ethical practices in the accounting profession.</p><p>These include:</p><ol><li>Company and Allied Matters Act (CAMA) 1990, as amended in 2022.</li><li>Bank and Other Financial Institutions Act (BOFIA) 1991.</li><li>International Accounting Standards (IAS).</li><li>International Financial Reporting Standards (IFRS).</li><li>Insurance Act 2003, among others.</li></ol>`
  },
  {
    id: 2005,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'ETHICS AND CASHBOOK',
    subtopic: 'CashBook',
    summary_60s: 'TOPICS Columnar cashbooks. Discounts. Petty cashbook and the imprest system. Cashbook is a book of account that records all money received and all money paid out by cash, by cheque and through bank within a specified period.Proper book keeping demands that a cash book should have',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of CashBook in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>TOPICS</strong></p><ol start="1" style="list-style-type:lower-alpha"><li>Columnar cashbooks.</li><li>Discounts.</li><li>Petty cashbook and the imprest system.</li></ol><p>Cashbook is a book of account that records all money received and all money paid out by cash, by cheque and through bank within a specified period.Proper book keeping demands that a cash book should have the following columns; date, particulars, numbers, folio, amount (cash or bank column). Cash book can be classified into the following;</p><ol><li>Single column cash book.</li><li>Double or two column cash-book.</li><li>Three column cash-book.</li></ol><h2 style="text-align:center"><strong>SINGLE COLUMN CASH BOOK</strong></h2><p>This is a book of account use for recording mainly all cash received and all cash payment in a business or organization. Below is the format of the single column cash book;</p><table border="1" style="width:400px"><thead><tr><th><strong>DR</strong></th><th> </th><th> </th><th> </th><th> </th><th> </th><th> </th><th><strong>CR</strong></th></tr></thead><tbody><tr><td>Date</td><td>Particular</td><td>Folio</td><td>Amount</td><td>Date</td><td>Particular</td><td>Folio</td><td>Amount</td></tr></tbody></table><p><strong>Illustration 1</strong>The following transactions are carried out in the month of January 2023 by Obi and sons ltd</p><table border="1" style="width:400px"><thead><tr><th><strong>Date</strong></th><th><strong>Transaction Description</strong></th><th><strong>Amount (₦)</strong></th></tr></thead><tbody><tr><td>01/01/23</td><td>Cash in hand (Capital)</td><td>50,000</td></tr><tr><td>02/01/23</td><td>Purchased goods for cash</td><td>12,000</td></tr><tr><td>03/01/23</td><td>Cash sales for the day</td><td>10,000</td></tr><tr><td>04/01/23</td><td>Received sales from Adebisi</td><td>9,000</td></tr><tr><td>05/01/23</td><td>Paid wages in cash</td><td>15,000</td></tr><tr><td>06/01/23</td><td>Bought stationery (cash)</td><td>7,000</td></tr></tbody></table><p><strong>SOLUTION</strong><strong>JOBI &amp; SONS LTD</strong><strong>ONE COLUMN CASH BOOK JANUARY 2023</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>DR</strong></th><th> </th><th> </th><th> </th><th> </th><th><strong>CR</strong></th><th> </th><th> </th></tr></thead><tbody><tr><td>Date</td><td>Particular</td><td>Folio</td><td>Amount</td><td>Date</td><td>Particular</td><td>Folio</td><td>Amount</td></tr><tr><td>1/1/23</td><td>Capital</td><td>50000</td><td>2/1/23</td><td>Goods purchased</td><td>12000</td></tr><tr><td>3/1/23</td><td>Sales</td><td>10000</td><td>5/1/23</td><td>Wages</td><td>15000</td></tr><tr><td>4/1/23</td><td>Adebisi</td><td>9000</td><td>6/1/23</td><td>Stationery</td><td>7000</td></tr><tr><td>Bal c/d</td><td>35000</td></tr><tr><td><strong>Total</strong></td><td><strong>69000</strong></td><td><strong>Total</strong></td><td><strong>69000</strong></td></tr><tr><td>Bal b/d</td><td>35000</td></tr></tbody></table><h2 style="text-align:center"><strong>DOUBLE COLUMN CASH BOOK</strong></h2><p>This is the expansion of the single-column cash book, except that it has columns for cash and bank/cheque transactions. This occurs when there are transactions that involve using cheque or bank payment. It still follows the principle of double entry. However, there are entries that are posted on both side of the two-column cash book; they are known as contra entry. <strong>Contra Entry</strong>This is when the same transaction is entered or recorded on the credit and debit side of the cash book. This happens when cash is withdrawn from the bank or cash is paid into bank. An example is illustrated below:Cash withdrawn from bank for office use. <strong>Action</strong>The debit side of the cash column will be debited as the receiver, while the credit side of the bank column will be credited as the giver. <strong>FORMAT</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>DR</strong></th><th> </th><th> </th><th> </th><th> </th><th> </th><th><strong>CR</strong></th><th> </th><th> </th><th> </th></tr></thead><tbody><tr><td>Date</td><td>Particular</td><td>Folio</td><td>Cash</td><td>Bank</td><td>Date</td><td>Particular</td><td>Folio</td><td>Cash</td><td>Bank</td></tr></tbody></table><p><strong>Illustration 2</strong>The following information was extracted from the books of Osuala Enterprises in the month of June 1996</p><table border="1" style="width:400px"><tbody><tr><th><strong>Date</strong></th><th><strong>Details</strong></th><th><strong>₦</strong></th><th><strong>₦</strong></th></tr><tr><td>1/6/96</td><td>Cash balance b/f</td><td>40000</td></tr><tr><td>Bank balance b/f</td><td>42000</td></tr><tr><td>3/6/96</td><td>Paid rent by cash</td><td>20000</td></tr><tr><td>4/6/96</td><td>Paid loan by cheque</td><td>10000</td></tr><tr><td>5/6/96</td><td>Paid general expenses in cash</td><td>600</td></tr><tr><td>6/6/96</td><td>Bought goods by cheque</td><td>6000</td></tr><tr><td>7/6/96</td><td>Paid cash into bank</td><td>30000</td></tr><tr><td>28/6/96</td><td>Paid wages in cash</td><td>7500</td></tr><tr><td>29/6/96</td><td>Rent received in cheque</td><td>2500</td></tr><tr><td>30/6/96</td><td>Cash received by cheque</td><td>20000</td></tr></tbody></table><p>You are required to write up a two-column cash book for Osuala Enterprises for the month of June. <strong>SOLUTION</strong><strong>OSUALA ENTERPRISES</strong><strong>TWO-COLUMN CASH BOOK FOR THE MONTH OF JUNE</strong></p><table border="1" style="width:500px"><thead><tr><th><strong>DR</strong></th><th> </th><th> </th><th> </th><th> </th><th><strong>CR</strong></th><th> </th><th> </th><th> </th><th> </th></tr></thead><tbody><tr><td>Date</td><td>Particular</td><td>F</td><td>Cash</td><td>Bank</td><td>Date</td><td>Particular</td><td>F</td><td>Cash</td><td>Bank</td></tr><tr><td>1/6/96</td><td>Capital</td><td>40000</td><td>42000</td><td>3/6/96</td><td>Rent</td><td>20000</td></tr><tr><td>7/6/96</td><td>Bank</td><td>C</td><td>30000</td><td>4/6/96</td><td>Loan</td><td>10000</td></tr><tr><td>29/6/96</td><td>Rent</td><td>2500</td><td>5/6/96</td><td>General Expenses</td><td>600</td></tr><tr><td>30/6/96</td><td>Cash received</td><td>20000</td><td>6/6/96</td><td>Goods purchased</td><td>6000</td></tr><tr><td>7/6/96</td><td>Cash</td><td>C</td><td>30000</td></tr><tr><td>28/6/96</td><td>Wages</td><td>1900</td><td>58500</td></tr><tr><td><strong>Total</strong></td><td><strong>60000</strong></td><td><strong>74500</strong></td><td><strong>Total</strong></td><td><strong>60000</strong></td><td><strong>74500</strong></td></tr><tr><td>Bal b/d</td><td>1900</td><td>58500</td></tr></tbody></table><h2 style="text-align:center"><strong>THREE-COLUMN CASH BOOK</strong></h2><p>This cash book is similar to the double column cash book except that a discount column is added on both the debit (discount received) and the credit side (discount allowed). This discount column is due to the reductions received and allowed by the organization or business. <strong>Discount Column</strong></p><ul><li><strong>Discount Allowed</strong>: Given to customers for prompt payment of accounts (treated as an expense).</li><li><strong>Discount Received</strong>: Received from suppliers for prompt payment of accounts (treated as revenue).</li></ul><p><strong>FORMAT</strong></p><table border="1" style="width:500px"><thead><tr><th>Date</th><th>Particular</th><th>F</th><th>Discount received</th><th>Cash</th><th>Bank</th><th>Date</th><th>Particular</th><th>F</th><th>Discount Allowed</th><th>Cash</th><th>Bank</th></tr></thead></table><p><strong>Illustration 3</strong>The following information was extracted from the books of C. Bintu for the month of January 1999:</p><table border="1" style="width:500px"><thead><tr><th><strong>Date</strong></th><th><strong>Particulars</strong></th><th><strong>Discount Received (₦)</strong></th><th><strong>Cash (₦)</strong></th><th><strong>Bank (₦)</strong></th></tr></thead><tbody><tr><td>1/1/99</td><td>Balance at Bank</td><td>60,000</td><td>35,000</td></tr><tr><td>2/1/99</td><td>Drew and cashed cheque</td><td>5,000</td><td>10,000</td></tr><tr><td>4/1/99</td><td>Bought goods for cash</td><td>7,000</td></tr><tr><td>6/1/99</td><td>Received cheque from Mr. Aluka</td><td>8,000</td></tr><tr><td>9/1/99</td><td>Banked cash</td><td>6,000</td></tr><tr><td>12/1/99</td><td>Cash sales today less 5% discount</td><td>1,000</td><td>19,000</td></tr><tr><td>16/1/99</td><td>Cash purchase from ABC Ltd</td><td>7,500</td></tr><tr><td>23/1/99</td><td>Purchase stationery by cheque</td><td>20,000</td></tr><tr><td>24/1/99</td><td>Cash purchase less 2% discount</td><td>250</td><td>20,000</td></tr><tr><td>27/1/99</td><td>Received cheque from Mrs. Joy</td><td>30,000</td></tr><tr><td>29/1/99</td><td>Received cash from ABC Ltd</td><td>7,500</td></tr><tr><td>30/1/99</td><td>Received cheque from customers</td><td>20,000</td></tr></tbody></table><p>You are required to draw the three-column cash book for C. Bintu for the month of January 1999. <strong>SOLUTION</strong>C. Bintu<strong>Three-Column Cash Book for January 1999</strong></p><table border="1" style="width:500px"><thead><tr><th><strong>Date</strong></th><th><strong>Particulars</strong></th><th><strong>Discount Received (₦)</strong></th><th><strong>Cash (₦)</strong></th><th><strong>Bank (₦)</strong></th></tr></thead><tbody><tr><td>1/1/99</td><td>Capital</td><td>60,000</td><td>35,000</td></tr><tr><td>2/1/99</td><td>Bank</td><td>5,000</td><td>10,000</td></tr><tr><td>4/1/99</td><td>Goods Purchased</td><td>7,000</td></tr><tr><td>6/1/99</td><td>Mr. Aluka</td><td>8,000</td></tr><tr><td>9/1/99</td><td>Cash</td><td>1,000</td><td>19,000</td></tr><tr><td>12/1/99</td><td>Sales</td><td>1,000</td><td>19,000</td></tr><tr><td>16/1/99</td><td>ABC Ltd</td><td>250</td><td>7,500</td></tr><tr><td>23/1/99</td><td>Stationery</td><td>20,000</td></tr><tr><td>24/1/99</td><td>Purchase</td><td>250</td><td>20,000</td></tr><tr><td>27/1/99</td><td>Mrs. Joy</td><td>30,000</td></tr><tr><td>29/1/99</td><td>ABC Ltd</td><td>7,500</td></tr><tr><td>30/1/99</td><td>Customers</td><td>20,000</td></tr></tbody></table><p><strong>Total:</strong></p><ul><li><strong>Discount Received</strong>: 1,250</li><li><strong>Cash</strong>: 40,000</li><li><strong>Bank</strong>: 88,000</li></ul><h1 style="text-align:center"><strong>DISCOUNT</strong></h1><p>This is a reduction in the payments of an organization ie. Off allowance in invoice price due to the quantity of goods or allowance for prompt payment of goods purchased by customers.We have 2 types of discounts:</p><ul style="list-style-type:disc"><li><strong>TRADE DISCOUNT:</strong> this is given by the manufacturer to the customer due to large quantities of goods purchased.</li><li><strong>CASH DISCOUNT:</strong> this is given to customers to encourage them to settle their debts or pay immediately the goods are purchased.</li></ul><p>Cash discount is further divided into two;<strong>a. Discount allowed</strong>: this is given to customers for prompt payment of account and is to be treated as an expense. It is debited to discount allowed in the cash book and credited to the personal account of the customer. <strong>b. Discount received:</strong> this is received from suppliers for prompt payment of account and is to be treated as a revenue It is credited to discount allowed in the cash book and debited to the personal account of the customer. <strong>Differences Between Trade Discount and Cash Discount:</strong></p><ol><li><strong>Trade Discount</strong> is compulsory, while <strong> Cash Discount</strong> is conditional.</li><li><strong>Trade Discount</strong> is deducted before the <strong> Cash Discount.</strong></li><li><strong>Trade Discount</strong> is recorded in the daybook, while <strong> Cash Discount</strong> is recorded in the cashbook.</li><li><strong>Trade Discount</strong> is an allowance on the invoice price, while <strong> Cash Discount</strong> is an allowance for prompt payment.</li></ol><h1 style="text-align:center"><strong>PETTY CASH BOOK</strong></h1><p><strong>Petty cash</strong> is a small, fixed fund kept to settle <em>low-value, frequent</em> payments (e.g., postage, stationery, transport/bus fares, minor cleaning). The <strong> Petty Cash Book (PCB)</strong> is both a <strong> book of prime entry</strong> and a <strong> ledger account</strong> for these small payments. It reduces congestion in the main Cash Book and general ledger.The fixed amount of money given to a petty cashier at the beginning of a period is calledThe fixed amount of money given to a petty cashier at the beginning of a period is called?</p><ul><li><strong>A.</strong><strong> Imprest (Correct)</strong></li><li><strong>B.</strong> float</li><li><strong>C.</strong> cash advance</li><li><strong>D.</strong> cash</li></ul><h2 style="text-align:center"><strong>The Imprest System</strong></h2><ul><li>The main cashier gives the petty cashier a fixed opening amount (the <strong> imprest</strong> or <strong> float</strong> ), e.g., per week or month.</li><li>During the period, the petty cashier pays small expenses <strong> against authorized petty cash vouchers</strong> and records them in the PCB.</li><li>At period-end, the PCB is balanced. The main cashier reimburses <strong> exactly the amount spent</strong> so that cash in hand returns to the imprest amount for the next period.</li><li>The imprest may be <strong> increased or reduced</strong> if spending patterns change.</li></ul><p><strong>Quick Formulas</strong></p><ul><li><strong>Cash in hand (closing)</strong> = Imprest − Total payments (net of any petty receipts).</li><li><strong>Reimbursement</strong> = Total payments during the period.</li><li><strong>If the float is to be increased</strong> by Δ: Reimbursement = Total payments + Δ.</li><li><strong>If the float is to be decreased</strong> by Δ: Reimbursement = Total payments − Δ.</li></ul><p>A Petty Cash Book resembles a ledger account with several money columns on the credit side. These are known as<strong> analysis columns</strong> and are used to divide the payments into different categories. A column is used for each of the main types of expenses paid out of petty cash. Instead of a folio column on the credit side, there is a column for recording the number of the voucher to which the payment relates.The number of columns and the main types of expenses will be determined by each individual business. In examinations, guidance is given regarding the columns required.A layout of a Petty Cash Book is shown as follows:<strong>PETTY CASH BOOK</strong></p><table border="1" style="width:500px"><tbody><tr><td>Date</td><td>Details</td><td>F</td><td>Total received</td><td>Date</td><td>Details</td><td>Total paid</td><td>Voucher number</td><td>Transport</td><td>Cleaning</td><td>Postage</td><td>Ledger</td></tr><tr><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td><td>N</td></tr></tbody></table>`
  },
  {
    id: 2006,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'BANK TRANSACTIONS',
    subtopic: 'Bank Transactions',
    summary_60s: 'Bank transactions often involve specific instruments, which can be either physical or digital tools.These instruments ensure that payments are made securely and efficiently. Key Concepts Deposits: Adding money to a bank account. Withdrawals: Taking money out of a bank account. Tr',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Bank Transactions in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Bank transactions often involve specific instruments, which can be either physical or digital tools.These instruments ensure that payments are made securely and efficiently. <strong>Key Concepts</strong></p><ul><li><strong>Deposits:</strong> Adding money to a bank account.</li><li><strong>Withdrawals:</strong> Taking money out of a bank account.</li><li><strong>Transfers:</strong> Moving money from one account to another, either within the same bank or between different banks.</li></ul><table border="2" style="width:450px"><thead><tr><th><strong>Instrument</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td><strong>Cheques</strong></td><td>Documents ordering a bank to pay a specific amount to a recipient. Types include open, order, and crossed cheques.</td></tr><tr><td><strong>Credit Card</strong></td><td>A card issued by financial institutions, allowing the holder to borrow funds for purchases, typically with interest.</td></tr><tr><td><strong>Debit Card</strong></td><td>A card linked to a bank account used for electronic transactions, often with fees after a certain number of transactions.</td></tr><tr><td><strong>Pay-in Slip</strong></td><td>A document used to deposit money into a bank account, either by cash or cheque.</td></tr><tr><td><strong>Internet Banking</strong></td><td>Secure online platforms for conducting transactions without physical cash or bank visits.</td></tr></tbody></table><h2 style="text-align:center"><strong>E-Banking System</strong></h2><p>The E-banking system, or Electronic Banking System, includes the technological infrastructure that allows customers to perform banking activities over a secure, encrypted network without needing to visit a physical bank. <strong>Key E-Banking Activities</strong></p><ul><li><strong>Internet Banking:</strong> Performing financial and non-financial transactions through a web page or web application. Examples include checking account balances, paying bills, and transferring funds.</li><li><strong>Mobile Banking:</strong> Using a bank’s mobile application to conduct banking activities, including fund transfers, bill payments, and more.</li><li><strong>Automated Teller Machines (ATMs):</strong> Machines that allow for convenient cash withdrawals, deposits, and balance inquiries. ATMs are one of the earliest forms of e-banking services.</li></ul><p><strong>Impact of E-Banking on Financial Systems</strong>E-banking has significantly influenced how money is managed and moved within the economy. Some key impacts include:</p><ul><li><strong>Automated Credit Systems:</strong> Facilitate the automatic movement of funds, improving efficiency.</li><li><strong>Credit Transfers and Interbank Transfers:</strong> Enable the transfer of funds between accounts and banks, reducing the need for physical cash.</li><li><strong>Direct Debits:</strong> Allow automatic withdrawals for recurring payments, streamlining bill payments and other regular expenses.</li></ul>`
  },
  {
    id: 2007,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'BANK TRANSACTIONS',
    subtopic: 'Bank Reconciliation Statements',
    summary_60s: 'A bank reconciliation compares your company\'s cash book with your bank statement to identify any differences. This is important to ensure your records are accurate. Reasons for Differences Standing Order: An order authorizing the bank to make payments. Deduct this from the cash b',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Bank Reconciliation Statements in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>A bank reconciliation compares your company's cash book with your bank statement to identify any differences. This is important to ensure your records are accurate. <strong>Reasons for Differences</strong></p><ul><li><strong>Standing Order:</strong> An order authorizing the bank to make payments. Deduct this from the cash book.</li><li><strong>Uncredited Cheque:</strong> A cheque recorded in the cash book but not yet on the bank statement. Deduct from the cash book.</li><li><strong>Dishonored Cheque:</strong> A rejected cheque. Deduct from the cash book.</li><li><strong>Dividends:</strong> Profits paid directly into your account. Add to the cash book.</li><li><strong>Bank Charges:</strong> Fees deducted by the bank. Deduct from the cash book.</li><li><strong>Unpresented Cheque:</strong> A cheque not yet paid by the bank. Add to the cash book.</li><li><strong>Credit Transfer:</strong> Payments made directly into your account. Add to the cash book.</li><li><strong>Other Factors:</strong> Direct debits, bank errors, and errors in the cash book.</li></ul><p><strong>FORMAT OF BANK RECONCILIATION STATEMENT</strong></p><table border="1" style="width:400px"><tbody><tr><th style="width:272px"><strong>Item</strong></th><th style="width:46px"><strong>₦</strong></th><th style="width:62px"><strong>₦</strong></th></tr><tr><td>Balance as per cash book</td><td>xx</td></tr><tr><td><strong>Add:</strong> Unpresented cheque</td><td>xx</td></tr><tr><td>Credit transfer</td><td>xx</td></tr><tr><td>Dividend</td><td>xx</td></tr><tr><td>Cash book/receipt undercast</td><td><strong>xx</strong></td><td>xx</td></tr><tr><td><strong>xx</strong></td></tr><tr><td><strong>Less:</strong> Uncredited cheque</td><td>xx</td></tr><tr><td>Bank charges</td><td>xx</td></tr><tr><td>Standing order</td><td>xx</td></tr><tr><td>Direct debit</td><td>xx</td></tr><tr><td>Dishonored cheque</td><td>xx</td></tr><tr><td>Cash book/receipt overcast</td><td>xx</td><td><strong>xx</strong></td></tr><tr><td><strong>Balance as per bank statement</strong></td><td><strong>xx</strong></td></tr></tbody></table><p><strong>NOTE:</strong>Preparing the bank reconciliation statement is pretty straightforward after all the details have been identified. <strong>ADJUSTED CASH BOOK</strong>However, there are situations where the cash book might have been overdrawn and will show a credit balance. An adjustment will have to be made to reconcile the disagreement. When the cash book and the bank statement are given, the following procedures has to be followed;</p><ol style="list-style-type:lower-roman"><li>The credit side of the cash book must be compared with the debit side of the cash book to ascertain if it is a credit or a debit balance.</li><li>The debit side of the cash book must be compared with the entries on the credit side of the bank statement.</li><li>Entries on the credit side of the bank statement such as dividend, credit transfer should be considered.</li><li>Entries on the debit side of the bank statement such as bank charges, standing order, bank commission should be considered.</li></ol><p><strong>FORMAT OF ADJUSTED CASH BOOK</strong></p><table border="1"><thead><tr><th>₦</th><th>XX</th><th>₦</th><th>XX</th></tr></thead><tbody><tr><td>Bal b/f</td><td>XX</td><td>Bank charges</td><td>XX</td></tr><tr><td>Dividend</td><td>XX</td><td>Dishonored cheque</td><td>XX</td></tr><tr><td>Payment overcast</td><td>XX</td><td>Bank commission</td><td>XX</td></tr><tr><td>Credit transfer</td><td>XX</td><td>Payment undercast</td><td>XX</td></tr><tr><td>Cash book/receipt undercast</td><td>XX</td><td>Standing order</td><td>XX</td></tr><tr><td>Cash book/receipt overcast</td><td>XX</td></tr><tr><td>Bal c/d</td><td>XX</td></tr><tr><td>Bal b/d</td><td>XX</td></tr></tbody></table><p><strong>BANK RECONCILIATION STATEMENT</strong></p><table border="1" style="width:350px"><tbody><tr><th><strong>Item</strong></th><th><strong>Debit (₦)</strong></th><th><strong>Credit (₦)</strong></th></tr><tr><td>Balance as per cash book</td><td>xx</td></tr><tr><td><strong>Add:</strong></td></tr><tr><td>Unpresented cheque</td><td>xx</td></tr><tr><td><strong>Less:</strong></td></tr><tr><td>Uncredited cheque</td><td>(xx)</td><td>xx</td></tr><tr><td><strong>Balance as per bank statement</strong></td><td>xx</td></tr></tbody></table><p><strong>Illustration 1</strong>30<sup>th</sup> June 2010, Musa and sons ltd cash book show a debit balance of N10500 whereas the bank statement show a balance of N6975. During investigation, the following was discovered;</p><ul><li>A standing order for subscription of N450 had been entered into the bank statement but had not been entered into the cash book.</li><li>A cheque of N105 previously received and paid into the bank had been rejected by the bank.</li><li>There was bank charges of N930.</li><li>N480 was directly paid into the business account.</li><li>The following cheques were drawn but were not presented to the bank; N1800, N750, N900.</li><li>A cheque received for N6000 entered in the cash book had not been entered by the bank.</li><li>A cheque drawn for N150 had been entered as N180.</li></ul><p><strong>You are required to prepare:</strong>a. Adjusted cash bookb. Bank reconciliation statement as at 30<sup>TH</sup> JUNE 2010<strong>SOLUTION</strong><strong>MUSA &amp; SONS LTD</strong><strong>ADJUSTED CASH BOOK</strong></p><table border="1" style="width:400px"><thead><tr><th> </th><th> </th><th> </th><th> </th></tr></thead><tbody><tr><td>Bal b/f</td><td>10500</td><td>Bank charges</td><td>930</td></tr><tr><td>Payment overcast (180-150)</td><td>30</td><td>Dishonoured cheque</td><td>105</td></tr><tr><td>Credit transfer</td><td>480</td><td>Standing order</td><td>450</td></tr><tr><td>Bal c/d</td><td>9525</td></tr><tr><td><strong>Total</strong></td><td>11010</td><td><strong>Total</strong></td><td>11010</td></tr><tr><td>Bal b/d</td><td>9525</td></tr></tbody></table><p><strong>MUSA &amp; SONS LTD BANK RECONCILIATION 30/6/10</strong></p><table border="1" style="width:421px"><thead><tr><th><strong>#</strong></th><th style="width:49px"><strong>₦</strong></th><th style="width:44px"><strong>₦</strong></th></tr></thead><tbody><tr><td>Balance as per adjusted cash book</td><td>9525</td></tr><tr><td><strong>Add:</strong> Unpresented cheque</td><td>900</td></tr><tr><td>750</td></tr><tr><td>1800</td><td>3450</td></tr><tr><td><strong>Less:</strong> Uncredited cheque</td><td>(6000)</td><td>6000</td></tr><tr><td><strong>Balance as per bank statement</strong></td><td>6975</td></tr></tbody></table>`
  },
  {
    id: 2008,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINAL ACCOUNT',
    subtopic: 'Sole Trader Income',
    summary_60s: 'Final Accounts of a Sole Trader Welcome to class! In today\'s lesson, we will be discussing the final accounts of a sole trader. Contents Contents of the Final Accounts of a Sole Trader. The Trading Account – Contents and Preparation. The Profit and Loss Account – Contents and Pre',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Sole Trader Income in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<h1 style="text-align:center"><strong>Final Accounts of a Sole Trader</strong></h1><p>Welcome to class! In today's lesson, we will be discussing the final accounts of a sole trader.</p><h2>Contents</h2><ul><li>Contents of the Final Accounts of a Sole Trader.</li><li>The Trading Account – Contents and Preparation.</li><li>The Profit and Loss Account – Contents and Preparation.</li></ul><h2>Final Accounts of a Sole Trader</h2><p>The final accounts of a sole trader consist of:</p><ol><li>The Trading Account.</li><li>The Profit and Loss Account.</li><li>The Balance Sheet.</li></ol><p>The Trading Account</p><p>The Trading Account is prepared to determine the Gross Profit or Gross Loss of the business for the trading period.</p><ul><li><strong>Gross Profit</strong> is the difference between sales revenue and the cost of goods sold</li><li><strong>Cost of goods sold</strong> is calculated by adding Opening Stock to Net Purchases and deducting Closing Stock</li><li><strong>Net Purchases</strong> is calculated by deducting Returns Outwards (Purchases Returns) from Purchases</li><li><strong>Sales revenue</strong> (Net Sales) is calculated by deducting Returns Inwards (Sales Returns) from Sales</li><li><strong>Carriage Inwards</strong> (cost of transporting goods to the trader's shop) is usually added to Purchases when calculating Cost of Goods Sold</li><li>Cost of goods sold is also referred to as Cost of Sales.</li></ul><p>The Trading Account must have a heading that includes the trading period and business name. It can be prepared in two formats:</p><ol><li><strong>Horizontal format (T-format)</strong> : Similar to a traditional ledger account with Sales revenue on the credit side and Cost of goods sold on the debit side. The difference equals the Gross Profit or Loss.</li><li><strong>Vertical format</strong>: Used by most businesses, containing the same information but presented as an arithmetic calculation.</li></ol><p>Illustration:</p><p>The following balances were extracted from the books of Tunde Enterprises for the year ended December 31, 2017:</p><p>[Note: The original illustration details were not fully visible in the document]</p><p>The value of Stock at close on December 31, 2017 was ₦9,500.</p><p><strong>Trading Account (Horizontal/T-format):</strong></p><pre><code>Tunde Enterprises Trading Account for the year ended December 31, 2017 ₦ ₦ Opening Stock X Sales X Purchases X Less: Returns Inwards X Less: Returns Outwards X Net Sales X Net Purchases X Add: Carriage Inwards X Cost of Goods Available X Less: Closing Stock X Cost of Goods Sold X Gross Profit c/d X X X </code></pre><p>The Profit and Loss Account</p><p>The Profit and Loss Account calculates the Net Profit or Net Loss for the period.</p><p>Formula: <strong> Net Profit = Gross Profit + Other Income - Expenses</strong></p><p>Like the Trading Account, the Profit and Loss Account must have a heading with the time period and business name. It can also be prepared using either horizontal or vertical format.</p><p>In the horizontal format, gross profit and other income appear on the credit side, while expenses appear on the debit side. The difference equals the Net Profit or Net Loss, which is transferred to the Capital Account.</p><p>Illustration:</p><p>Using the balances from the previous example, the Profit and Loss Account would be structured as:</p><pre><code>Tunde Enterprises Profit and Loss Account for the year ended December 31, 2017 ₦ ₦ Expenses: Gross Profit b/d X Carriage Outwards X Other Income X Rent and Rates X Salaries and Wages X General Expenses X [Other expenses] X Net Profit c/d X X X </code></pre><h2>Review Questions</h2><ol><li>List three features of the Trading Account.</li><li>State three components of the final accounts of a sole trader.</li><li>List four features of the Profit and Loss Account.</li><li>List three similarities and two differences between the Trading Account and the Profit and Loss Account.</li></ol><h2>Practice Questions</h2><ol><li>Carriage inwards as an expense of a business is treated in the: a) Trading Account b) Profit and Loss Account c) Balance Sheet d) Appropriation Account.</li></ol><p>2-5. Use the following information:</p><ul><li>Purchases: ₦168,000.</li><li>Sales: ₦183,400.</li><li>Opening Stock: ₦20,100.</li><li>Closing Stock: ₦48,900.</li><li>Carriage Outwards: ₦2,400.</li><li>Carriage Inwards: ₦5,000.</li><li>Returns Inwards: ₦10,000.</li><li>Expenses: ₦15,000.</li><li>Returns Outwards: ₦8,000.</li></ul><ol start="2"><li>The gross profit is: a) ₦47,200 b) ₦42,200 c) ₦37,200 d) ₦19,800.</li><li>The net profit is: a) ₦42,200 b) ₦37,200 c) ₦19,800 d) ₦47,200.</li><li>The cost of goods sold is: a) ₦185,100 b) ₦139,200 c) ₦136,200 d) ₦131,200.</li><li>The cost of goods available for sale was: a) ₦188,100 b) ₦173,000 c) ₦193,100 d) ₦190,700.</li></ol><h2><strong>Assignment</strong></h2><ol><li>List three uses of each of the following financial records/information: <ul><li>Cash Book.</li><li>Profit and Loss Account.</li></ul></li><li>List ten items of expenses that are charged (debited) to the Profit and Loss Account of a sole trader.</li></ol>`
  },
  {
    id: 2009,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'FINAL ACCOUNT',
    subtopic: 'Statement of Financial Position',
    summary_60s: 'Ever wondered how big companies like Dangote measure their worth? Let\'s uncover the "Statement of Financial Position" and learn the language of wealth to assess any business like a pro!The Statement of Financial Position, previously known as the balance sheet, shows a summary of ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Statement of Financial Position in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Ever wondered how big companies like Dangote measure their worth? Let's uncover the "Statement of Financial Position" and learn the language of wealth to assess any business like a pro!The Statement of Financial Position, previously known as the balance sheet, shows a summary of all assets and liabilities. It helps determine the financial health of a business at a given time.</p><h2><strong>Key Terminologies</strong></h2><ol><li><strong>Capital</strong>: Funds invested by the owner; also called owner’s equity.</li><li><strong>Assets</strong>: Resources owned by the business, categorized as: <ul><li><strong>Non-current assets</strong>: Long-term assets that generate revenue (e.g., land, buildings, machinery).</li><li><strong>Current assets</strong>: Short-term assets easily converted into cash (e.g., inventory, cash, debtors).</li></ul></li><li><strong>Liabilities</strong>: Amounts the business owes, categorized as: <ul><li><strong>Non-current liabilities</strong>: Long-term debts (e.g., loans, debentures).</li><li><strong>Current liabilities</strong>: Short-term debts payable within a year (e.g., creditors, bank overdrafts).</li></ul></li><li><strong>Drawings</strong>: Withdrawals by the owner for personal use.</li><li><strong>Depreciation</strong>: Reduction in the value of an asset over time due to usage or wear and tear.</li></ol><p><strong>FORMAT OF STATEMENT OF FINANCIAL POSITION</strong><strong>Format of a Statement of Financial Position</strong><strong>Assets</strong></p><table border="1"><thead><tr><th><strong>Non-Current Assets</strong></th><th><strong>Cost</strong></th><th><strong>Depreciation</strong></th><th><strong>Net Book Value (NBV)</strong></th></tr></thead><tbody><tr><td>Land and buildings</td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td>Motor vehicles</td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td>Furniture and fittings</td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td>Plant and machinery</td><td>XX</td><td>XX</td><td>XX</td></tr></tbody></table><table border="1"><thead><tr><th><strong>Current Assets</strong></th><th> </th><th> </th><th> </th></tr></thead><tbody><tr><td>Closing inventory</td><td>XX</td></tr><tr><td>Cash at bank</td><td>XX</td></tr><tr><td>Cash in hand</td><td>XX</td></tr><tr><td>Debtors</td><td>XX</td><td>Less: bad debts (XX)</td></tr></tbody></table><p><strong>Equity and Liabilities</strong></p><table border="1"><thead><tr><th><strong>Equity</strong></th><th> </th><th> </th></tr></thead><tbody><tr><td>Capital</td><td>XX</td></tr><tr><td>Add: Net profit</td><td>XX</td></tr><tr><td>Less: Drawings</td><td>(XX)</td></tr></tbody></table><table border="1"><thead><tr><th><strong>Liabilities</strong></th><th> </th><th> </th></tr></thead><tbody><tr><td>Non-current liabilities</td></tr><tr><td>Current liabilities</td><td>XX</td></tr></tbody></table><p><strong>Illustration</strong>Prepare the <strong> Income Statement</strong> and <strong> Statement of Financial Position</strong> for Okilo Ventures based on the following data extracted as of 31st December 2003:<strong>Trial Balance</strong>:</p><table border="1"><thead><tr><th><strong>Particulars</strong></th><th><strong>Dr (N)</strong></th><th><strong>Cr (N)</strong></th></tr></thead><tbody><tr><td>Purchases</td><td>115,560</td></tr><tr><td>Cash at bank</td><td>38,760</td></tr><tr><td>Sales</td><td>186,000</td></tr><tr><td>Opening inventory</td><td>37,760</td></tr><tr><td>Carriage inwards</td><td>2,340</td></tr><tr><td>Carriage outwards</td><td>3,260</td></tr><tr><td>Returns inward</td><td>4,400</td></tr><tr><td>Returns outward</td><td>3,550</td></tr><tr><td>Salaries and wages</td><td>24,470</td></tr><tr><td>Motor expenses</td><td>6,640</td></tr><tr><td>Rent</td><td>5,760</td></tr><tr><td>Capital</td><td>128,440</td></tr><tr><td>General expenses</td><td>12,020</td></tr><tr><td>Motor vehicles</td><td>24,000</td></tr><tr><td>Furniture and fittings</td><td>6,000</td></tr><tr><td>Drawings</td><td>20,500</td></tr><tr><td>Cash in hand</td><td>1,200</td></tr><tr><td>Creditors</td><td>30,450</td></tr><tr><td>Debtors</td><td>45,770</td></tr></tbody></table><p><strong>Additional Information</strong>:Closing inventory as of 31st December 2003: <strong> N49,980</strong><strong>Solution</strong><strong>Income Statement</strong> (Trading, Profit, and Loss Account)</p><table border="1"><thead><tr><th><strong>Particulars</strong></th><th><strong>N</strong></th></tr></thead><tbody><tr><td>Sales</td><td>186,000</td></tr><tr><td>Less: Returns inward</td><td>(4,400)</td></tr><tr><td><strong>Net sales</strong></td><td><strong>181,600</strong></td></tr></tbody></table><p><strong>Cost of Goods Sold Calculation</strong></p><table border="1"><thead><tr><th><strong>Particulars</strong></th><th><strong>Naira (N)</strong></th></tr></thead><tbody><tr><td>Opening Inventory</td><td>37,760</td></tr><tr><td>Add: Purchases</td><td>115,560</td></tr><tr><td>Add: Carriage Inwards</td><td>2,340</td></tr><tr><td>Less: Returns Outward</td><td>(3,550)</td></tr><tr><td><strong>Cost of Goods Available</strong></td><td><strong>152,110</strong></td></tr><tr><td>Less: Closing Inventory</td><td>(49,980)</td></tr><tr><td><strong>Cost of Goods Sold (COGS)</strong></td><td><strong>102,130</strong></td></tr></tbody></table><p><strong>Gross Profit Calculation</strong></p><table border="1"><thead><tr><th><strong>Particulars</strong></th><th><strong>Naira (N)</strong></th></tr></thead><tbody><tr><td>Net Sales</td><td>181,600</td></tr><tr><td>Less: Cost of Goods Sold</td><td>(102,130)</td></tr><tr><td><strong>Gross Profit</strong></td><td><strong>79,470</strong></td></tr></tbody></table><p><strong>Statement of Financial Position</strong></p><table border="1"><thead><tr><th><strong>Assets</strong></th><th><strong>Cost (N)</strong></th><th><strong>NBV (N)</strong></th></tr></thead><tbody><tr><td><strong>Non-Current Assets</strong></td></tr><tr><td>Motor vehicles</td><td>24,000</td><td>24,000</td></tr><tr><td>Furniture and fittings</td><td>6,000</td><td>6,000</td></tr><tr><td><strong>Total Non-Current Assets</strong></td><td><strong>30,000</strong></td></tr></tbody></table><table border="1"><thead><tr><th><strong>Current Assets</strong></th><th> </th><th><strong>N</strong></th></tr></thead><tbody><tr><td>Closing inventory</td><td>49,980</td></tr><tr><td>Cash at bank</td><td>38,760</td></tr><tr><td>Cash in hand</td><td>1,200</td></tr><tr><td>Debtors</td><td>45,770</td></tr><tr><td><strong>Total Current Assets</strong></td><td><strong>135,710</strong></td></tr></tbody></table><p>| <strong> Total Assets</strong> | | <strong> 165,710</strong> |</p><table border="1"><thead><tr><th><strong>Equity and Liabilities</strong></th><th> </th><th><strong>N</strong></th></tr></thead><tbody><tr><td>Capital</td><td>128,440</td></tr><tr><td>Add: Net profit</td><td>27,320</td></tr><tr><td>Less: Drawings</td><td>(20,500)</td></tr><tr><td><strong>Total Equity</strong></td><td><strong>135,260</strong></td></tr><tr><td><strong>Liabilities</strong></td></tr><tr><td>Creditors</td><td>30,450</td></tr><tr><td><strong>Total Liabilities</strong></td><td><strong>30,450</strong></td></tr><tr><td><strong>Total Equity &amp; Liabilities</strong></td><td><strong>165,710</strong></td></tr></tbody></table>`
  },
  {
    id: 2010,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'STOCK VALUATION',
    subtopic: 'Methods of Stock Valuation',
    summary_60s: 'Ever dreamt of running your own shop? "Methods of Stock Valuation" are your secret weapon! Here we will learn how to track your goods, measure profits, and make smart business decisions, all thanks to these powerful techniques. Methods of stock valuation Stock valuation is simply',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Methods of Stock Valuation in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Ever dreamt of running your own shop? "Methods of Stock Valuation" are your secret weapon! Here we will learn how to track your goods, measure profits, and make smart business decisions, all thanks to these powerful techniques. <strong>Methods of stock valuation</strong>Stock valuation is simply the process of determining the quantity of goods/materials held and deciding on the price of such goods/materials in the store or warehouse of a business organization. The various methods of stock valuation include;</p><ol style="list-style-type:lower-alpha"><li>First in First out (FIFO).</li><li>Last in first out (LIFO).</li><li>Simple average price.</li><li>Weighted average price.</li><li>Replacement price.</li></ol><h2 style="text-align:justify"><strong>First In First Out (FIFO)</strong></h2><p>This method assumed that materials bought earlier are the first to be issued and that requisition of goods are priced at the earliest prices paid for the material. <strong>Advantages of using the FIFO method.</strong></p><ol><li>It is an actual cost system.</li><li>Unrealized profit/loss do not arise.</li><li>Closing stock represent the latest price.</li><li>It is simple to understand.</li></ol><p><strong>Disadvantages of FIFO</strong></p><ol><li>It is costly to operate.</li><li>Cost varies from batch to batch even with issues made on the same day.</li><li>It leads to profit fluctuation from period to period.</li><li>In period of falling prices, product cost is overstated while profit is understated.</li></ol><p><strong>Illustration 1</strong>The following are available about a business organization for the month of January 20141<sup>st</sup> January 2014 opening stock 250 at <s>N</s>200 each4<sup>th</sup> January 2014 issues 15010<sup>th</sup> January receipts 80 at <s>N</s>2.20 each18<sup>th</sup> January issues 10525<sup>th</sup> January receipts 90 at <s>N</s>2.25 eachYou are required to find the value of closing inventory using FIFO method. <strong>SOLUTION</strong><strong>SOLUTION</strong><strong>STOCK VALUATION USING FIFO METHOD</strong></p><table border="1"><tbody><tr><td><strong>DATE</strong></td><td><strong>DETAILS</strong></td><td><strong>RECEIPTS</strong></td><td><strong>ISSUES</strong></td><td><strong>BALANCE</strong></td></tr><tr><td><strong>Qty</strong></td><td><strong>Unit Price <s>(N)</s></strong></td><td><strong>Value <s>(N)</s></strong></td><td><strong>Qty</strong></td><td><strong>Unit price <s>(N)</s></strong></td><td><strong>Value <s>(N)</s></strong></td><td><strong>Qty</strong></td><td><strong>Value <s>(N)</s></strong></td></tr><tr><td>1/1/14</td><td>Receipts</td><td>250</td><td>2.00</td><td>500</td><td>-</td><td>-</td><td>-</td><td>250</td><td>500</td></tr><tr><td>4/1/14</td><td>Issued</td><td>-</td><td>-</td><td>-</td><td>150</td><td>2</td><td>300</td><td>(150)</td><td>(300)</td></tr><tr><td>100</td><td>200</td></tr><tr><td>10/1/14</td><td>Receipts</td><td>80</td><td>2.20</td><td>176</td><td>-</td><td>-</td><td>-</td><td>80</td><td>176</td></tr><tr><td>180</td><td>376</td></tr><tr><td>18/1/14</td><td>Issues</td><td>-</td><td>-</td><td>-</td><td>105</td></tr><tr><td>100</td><td>2.00</td><td>200</td><td>(100)</td><td>(200)</td></tr><tr><td>80</td><td>176</td></tr><tr><td>5</td><td>2.20</td><td>11</td><td>(5)</td><td>(11)</td></tr><tr><td>75</td><td>165</td></tr><tr><td>25/1/14</td><td>Receipts</td><td>90</td><td>2.25</td><td>202.5</td><td>-</td><td>-</td><td>-</td><td>90</td><td>202.5</td></tr><tr><td><strong>165</strong></td><td><strong>367.5</strong></td></tr></tbody></table><ul><li>Closing inventory = 165.</li><li>Value of goods= <s>N</s>367.5</li></ul><p><strong>LAST IN FIRST OUT (LIFO)</strong>This method assume that materials bought recently are forced to be issued and requisition are priced at the most recent prices paid for the materials which are in stock. <strong>Advantages of LIFO</strong></p><ol><li>It gives value of goods issued close to the current economic value.</li><li>Valuation of stock balance is usually very conservative.</li><li>It helps to reveal the current stock cost.</li><li>Error can be easily detected.</li></ol><p><strong>Disadvantage of LIFO</strong></p><ol><li>It is costly to operate.</li><li>In period of falling prices, some stock/cost may be written off.</li><li>In period of rising prices, closing stock may fall below the current cost.</li><li>Cost of material changes in period of falling prices thereby increasing production cost.</li></ol><p><strong>Illustration</strong>The following was extracted from a business organization for the month of march 20151<sup>st</sup> march 2015 stock at start 500 at <s>N</s>4.00 each5<sup>th</sup> march 2015 issues 30010<sup>th</sup> march 2015 receipts 160 at <s>N</s>4.4018<sup>th</sup> march 2015 issued 21025<sup>th</sup> march 2015 receipts 180 at <s>N</s>4.50You are required to calculate the value of stocks at close using LIFO method. <strong>SOLUTION</strong><strong>STOCK VALUATION USING LIFO METHOD</strong></p><table border="1"><tbody><tr><td><strong>DATE</strong></td><td><strong>DETAILS</strong></td><td><strong>RECEIPTS</strong></td><td><strong>ISSUES</strong></td><td><strong>BALANCE</strong></td></tr><tr><td> </td><td> </td><td><strong>Qty</strong></td><td><strong>Unit Price <s>(N)</s></strong></td><td><strong>Value <s>(N)</s></strong></td><td><strong>Qty</strong></td><td><strong>Unit price <s>(N)</s></strong></td><td><strong>Value <s>(N)</s></strong></td><td><strong>Qty</strong></td><td><strong>Value <s>(N)</s></strong></td></tr><tr><td>1/3/15</td><td>Opening inventory</td><td>500</td><td>4.00</td><td>2000</td><td>-</td><td>-</td><td>-</td><td>500</td><td>2000</td></tr><tr><td>5/3/15</td><td>Issues</td><td>-</td><td>-</td><td>-</td><td>300</td><td>4.00</td><td>1200</td><td>(300)</td><td>(1200)</td></tr><tr><td>200</td><td>800</td></tr><tr><td>10/3/15</td><td>Receipts</td><td>160</td><td>4.40</td><td>704</td><td>-</td><td>-</td><td>-</td><td>160</td><td>704</td></tr><tr><td>360</td><td>1504</td></tr><tr><td>18/3/15</td><td>Issues</td><td>-</td><td>-</td><td>-</td><td>210</td></tr><tr><td>160</td><td>4.40</td><td>704</td><td>(160)</td><td>(704)</td></tr><tr><td>200</td><td>800</td></tr><tr><td>50</td><td>4.00</td><td>200</td><td>(50)</td><td>(200)</td></tr><tr><td>150</td><td>600</td></tr><tr><td>25/3/15</td><td>Receipts</td><td>180</td><td>4.50</td><td>810</td><td>-</td><td>-</td><td>-</td><td>180</td><td>810</td></tr><tr><td><strong>330</strong></td><td><strong>1410</strong></td></tr></tbody></table><p>Closing inventory = 330Value of closing inventory = <s>N</s>1410</p>`
  },
  {
    id: 2011,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'STOCK VALUATION',
    subtopic: 'Weighted Average',
    summary_60s: 'The weighted average method is used to evenly spread the cost of materials. It is calculated by dividing the total cost of material stocks by the quantities of materials in stock. Advantages of Weighted Average: Easy to compute, as it is less complicated than FIFO and LIFO. Balan',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Weighted Average in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>The weighted average method is used to evenly spread the cost of materials. It is calculated by dividing the total cost of material stocks by the quantities of materials in stock.</p><p><strong>Advantages of Weighted Average:</strong></p><ul><li>Easy to compute, as it is less complicated than FIFO and LIFO.</li><li>Balances fluctuations in prices.</li><li>Allows for cost comparisons between jobs using the same materials.</li></ul><p><strong>Disadvantages of Weighted Average:</strong></p><ul><li>It does not reflect the actual buying price.</li></ul><h2><strong>Illustration</strong></h2><p><strong>Compute the value of the closing inventory using the weighted average method of stock valuation.</strong></p><ul><li><strong>1/1/15</strong> : Opening inventory - 5000 units @ N20.00 each</li><li><strong>6/1/15</strong> : Receipts - 1600 units @ N22.00 each</li><li><strong>20/1/15</strong> : Receipts - 1800 units @ N25.00 each</li><li><strong>2/1/15</strong> : Issues to production - 3000 units</li><li><strong>16/1/15</strong> : Issues to production - 2100 units</li></ul><p><strong>Solution:</strong></p><p><strong>Stock Valuation Using LIFO Method</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Date</strong></th><th><strong>Details</strong></th><th><strong>Receipts (Qty)</strong></th><th><strong>Receipts (Unit Price N)</strong></th><th><strong>Receipts (Value N)</strong></th><th><strong>Issues (Qty)</strong></th><th><strong>Issues (Unit Price N)</strong></th><th><strong>Issues (Value N)</strong></th><th><strong>Balance (Qty)</strong></th><th><strong>Balance (Value N)</strong></th></tr></thead><tbody><tr><td><strong>1/1/15</strong></td><td>Opening inventory</td><td>5000</td><td>20.00</td><td>100,000</td><td>5000</td><td>100,000</td></tr><tr><td><strong>2/1/15</strong></td><td>Issues</td><td>3000</td><td>20.00</td><td>60,000</td><td>2000</td><td>40,000</td></tr><tr><td><strong>6/1/15</strong></td><td>Receipts</td><td>1600</td><td>22.00</td><td>35,200</td><td>3600</td><td>75,200</td></tr><tr><td><strong>16/1/15</strong></td><td>Issues</td><td>2100</td><td>20.89</td><td>43,869</td><td>1500</td><td>31,331</td></tr><tr><td><strong>20/1/15</strong></td><td>Receipts</td><td>1800</td><td>25.00</td><td>45,000</td><td>3300</td><td>76,331</td></tr></tbody></table><p>The value of the closing stock is <strong> N76,331.</strong></p>`
  },
  {
    id: 2012,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'CONTROL AND LEDGERS',
    subtopic: 'Control Account',
    summary_60s: 'Have you ever been caught in a messy room and you no idea who made the mess? Well, in accounting, "Control Accounts" help you pinpoint exactly where any financial discrepancy or issue might be hiding! Today, we\'ll become financial detectives and learn how these accounts keep ever',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Control Account in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Have you ever been caught in a messy room and you no idea who made the mess? Well, in accounting, "Control Accounts" help you pinpoint exactly where any financial discrepancy or issue might be hiding! Today, we'll become financial detectives and learn how these accounts keep everything neat and organized.</p><p><strong>Meaning and uses of control account</strong></p><p>Control account is an account prepared to check the accuracy of different account entry in each ledger. In order to reduce the errors and the time involved in locating these errors, it is convenient to adopt a system whereby ledger can be balanced individually and independently.</p><p>These are some of the importance of control account;</p><ul style="list-style-type:circle"><li>It helps in preventing fraud.</li><li>It is useful in detecting error.</li><li>It helps to know the ledger of transaction group.</li><li>It helps in locating missing amount record.</li><li>It is useful in checking the accuracy of balances in the ledger.</li></ul><p>There are two account entries prepared in control account;</p><ol style="list-style-type:lower-alpha"><li>Total debtor control account OR sales ledger control account.</li><li>Total creditor control account OR purchase ledger control account.</li></ol><p>To prepare these accounts, there are different sources of information that must be in place. Some of them include;</p><ul style="list-style-type:circle"><li>Purchase day book.</li><li>Sales day book.</li><li>Return inwards day book.</li><li>Return outward day book.</li><li>Cash book.</li><li>Receipt.</li><li>Petty cashbook.</li><li>Opening balance sheet.</li></ul><p>Think of Control Accounts as the captain of a financial ship. They steer the subsidiary ledgers, keeping them organized and in sync. Without this captain, chaos would erupt! So, remember, mastering Control Accounts isn't just about ticking boxes; it's about navigating the financial world with confidence and accuracy.</p>`
  },
  {
    id: 2013,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'CONTROL AND LEDGERS',
    subtopic: 'Sales Ledger Account',
    summary_60s: 'Ever wondered how businesses avoid getting lost in a lot of customer debts? The "Sales Ledger Control Account" is their secret weapon! Learn how it guides them towards accurate records and makes debt record and collection easier than ever. SALES LEDGER CONTROL ACCOUNT This indivi',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Sales Ledger Account in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Ever wondered how businesses avoid getting lost in a lot of customer debts? The "Sales Ledger Control Account" is their secret weapon! Learn how it guides them towards accurate records and makes debt record and collection easier than ever. <strong>SALES LEDGER CONTROL ACCOUNT </strong>This individual ledger records all the total balances owed to the business by customers. As part of the control account, it also seeks to check the accuracy of all debts owed to the business. Below is a format of the sales ledger control account;<strong>TOTAL DEBTOR OR SALES LEDGER CONTROL ACCOUNT </strong><strong>DR. CR</strong></p><table border="1"><tbody><tr><td><s>N</s></td><td><s>N</s></td></tr><tr><td>Opening sales debit balance</td><td>XX</td><td>Opening sales credit balance</td><td>XX</td></tr><tr><td>Sundry debtor</td><td>XX</td><td>Petty cash from customer</td><td>XX</td></tr><tr><td>Credit sales</td><td>XX</td><td>Cash, cheque or bill receivable</td><td>XX</td></tr><tr><td>Customer cash, bill or cheque dishonored</td><td>XX</td><td>Returns inward</td><td>XX</td></tr><tr><td>Discount disallowed</td><td>XX</td><td>Discount allowed</td><td>XX</td></tr><tr><td>Sales day book</td><td>XX</td><td>Bad debt</td><td>XX</td></tr><tr><td>Debit note issued</td><td>XX</td><td>Bad debt written off</td><td>XX</td></tr><tr><td>Interest charged on customer</td><td>XX</td><td>Cash, cheque or bill from customers</td><td>XX</td></tr><tr><td>Cash, cheque or bill refund to customer</td><td>XX</td><td>Credit note issued</td><td>XX</td></tr><tr><td>Closing sales debit ledger balance</td><td>XX</td><td>Contra entry</td><td>XX</td></tr><tr><td>Closing sales credit balance</td><td>XX</td></tr><tr><td>Balance c/d</td><td>XX</td><td>Balance c/d</td><td>XX</td></tr><tr><td><strong>XX</strong></td><td><strong>XX</strong></td></tr></tbody></table><p><strong>Illustration</strong>The following record were showing in the book of Mr John as at 31/3/2005<s>N</s>Sales ledger balance DR 43743Sales ledger balance CR 2706Bill receivable accepted 25053Bad debt written off 1881Credit sales 113718Cash received from customer 98118Sales return &amp; allowed 2520Discount allowed 4779Balance of sales ledger set off against balance of purchase ledger 449Sales credit balance at close 3837Required; prepare total debtor control account. <strong>SOLUTION</strong><strong>TOTAL DEBTOR OR SALES LEDGER CONTROL ACCOUNT </strong><strong>DR CR</strong></p><table border="1"><tbody><tr><td><strong><s>N</s></strong></td><td><strong><s>N</s></strong></td></tr><tr><td>Opening sales debit balance</td><td>43743</td><td>Opening sales credit balance</td><td>2706</td></tr><tr><td>Credit sales</td><td>113718</td><td>Bill receivable</td><td>25053</td></tr><tr><td>Balance c/d</td><td>3837</td><td>Return inward</td><td>2520</td></tr><tr><td>Discount allowed</td><td>4779</td></tr><tr><td>Bad debt written off</td><td>1881</td></tr><tr><td>Cash, cheque or bill from customers</td><td>98118</td></tr><tr><td>Contra entry</td><td>4494</td></tr><tr><td>Balance c/d</td><td>21747</td></tr><tr><td><strong>161298</strong></td><td><strong>161298</strong></td></tr></tbody></table>`
  },
  {
    id: 2014,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'CONTROL AND LEDGERS',
    subtopic: 'Purchase Ledger Account',
    summary_60s: 'PURCHASE LEDGER CONTROL ACCOUNT This individual ledger records all the total balances owed by the business to suppliers. As part of the control account, it also seeks to check the accuracy of all debts owed by the business. Below is a format of the purchase ledger control account',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Purchase Ledger Account in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>PURCHASE LEDGER CONTROL ACCOUNT </strong>This individual ledger records all the total balances owed by the business to suppliers. As part of the control account, it also seeks to check the accuracy of all debts owed by the business. Below is a format of the purchase ledger control account;<strong>DR TOTAL CREDITOR OR PURCHASE LEDGER CONTROL ACCOUNT CR</strong></p><table border="1"><tbody><tr><td><s>N</s></td><td><s>N</s></td></tr><tr><td>Opening purchase debit balance</td><td>XX</td><td>Opening purchase credit balance</td><td>XX</td></tr><tr><td>Return outward</td><td>XX</td><td>Credit purchase</td><td>XX</td></tr><tr><td>Cash, cheque or bill payable</td><td>XX</td><td>Supplier cash, cheque or bill dishonored</td><td>XX</td></tr><tr><td>Discount received</td><td>XX</td><td>Discount received subsequently withdrawn</td><td>XX</td></tr><tr><td>Cash, cheque or bill to supplier</td><td>XX</td><td>Cash, cheque or bill refund to supplier</td><td>XX</td></tr><tr><td>Credit note received</td><td>XX</td><td>Purchase day book</td><td>XX</td></tr><tr><td>Petty cash to supplier</td><td>XX</td><td>Sundry creditor</td><td>XX</td></tr><tr><td>Contra entry</td><td>XX</td><td>Debit note received</td><td>XX</td></tr><tr><td>Payment to supplier or creditor</td><td>XX</td><td>Purchase debit balance at close</td><td>XX</td></tr><tr><td>Closing purchase debit ledger balance</td><td>XX</td><td>Close purchase credit ledger balance</td><td>XX</td></tr><tr><td>Balance c/d</td><td>XX</td><td>Balance c/d</td><td>XX</td></tr><tr><td><strong>XX</strong></td><td><strong>XX</strong></td></tr></tbody></table><p><strong>Illustration </strong>The following transactions were extracted from the book of ABC ltd for the year ended 31/12/2009<s>N</s>Purchase ledger balance 1118740Discount received 21340Return outward 26480Petty cash to supplier 780Credit purchases 1546520Cheque paid to supplier 1461000Contra entry 10360You are required to prepare ABC limited total creditor control account. <strong>SOLUTION</strong><strong>DR TOTAL CREDITOR OR PURCHASE LEDGER CONTROL ACCOUNT CR</strong></p><table border="1"><tbody><tr><td><strong><s>N</s></strong></td><td><strong><s>N</s></strong></td></tr><tr><td>Return outward</td><td>26480</td><td>Opening purchase credit balance</td><td>1118740</td></tr><tr><td>Discount received</td><td>21340</td><td>Credit purchase</td><td>1546520</td></tr><tr><td>Cash, cheque or bill to supplier</td><td>1461000</td></tr><tr><td>Petty cash to supplier</td><td>780</td></tr><tr><td>Contra entry</td><td>10360</td></tr><tr><td>Balance c/d</td><td>1145300</td></tr><tr><td><strong>2665260</strong></td><td><strong>2665260</strong></td></tr></tbody></table>`
  },
  {
    id: 2015,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'INCOMPLETE RECORDS',
    subtopic: 'Determining Missing Figures',
    summary_60s: 'Incomplete records refer to situations where a business does not maintain a complete set of books according to the double-entry system. This may occur due to: Lack of proper accounting knowledge. Loss of records due to fire/theft. Use of a single-entry system. Negligence or incom',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Determining Missing Figures in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Incomplete records refer to situations where a business does not maintain a complete set of books according to the double-entry system. This may occur due to:</p><ul><li>Lack of proper accounting knowledge.</li><li>Loss of records due to fire/theft.</li><li>Use of a <strong> single-entry system.</strong></li><li>Negligence or incompetence of the bookkeeper.</li></ul><h1 style="text-align:center"><strong>Single Entry And Incomplete Records</strong></h1><p>Single entry and incomplete record bookkeeping is a system that does not conform to the basic principles of double entry system. Only one aspect of a transaction is recorded, as opposed to the double-entry system where each transaction affects at least two accounts.</p><p><strong>Characteristics of Single Entry Systems:</strong></p><ul><li>Only one aspect of a transaction is recorded.</li><li>Lacks comprehensive records of assets and liabilities.</li><li>Often focuses primarily on cash transactions.</li><li>May include personal and business transactions together.</li><li>Limited internal controls and checking mechanisms.</li></ul><p><strong>Limitations of Single Entry Systems:</strong></p><ol><li>It does not conform with the principle of double entry system.</li><li>The flexibility of double entry is lacking.</li><li>It is difficult to obtain accurate information since the records are not complete.</li><li>It will be difficult to arrive at accurate profit/loss of the year.</li><li>Higher susceptibility to fraud and manipulation.</li><li>Difficult to audit effectively.</li><li>May not meet regulatory requirements.</li></ol><h2 style="text-align:center"><strong>Methods of Determining Missing Figures</strong></h2><p>There are usually two main approaches to prepare accounts from incomplete records:</p><p>1. Statement of Affairs Method (Capital Comparison Method)</p><p>This method involves comparing the opening and closing capital to determine profit or loss. It is used when the records are incomplete, with assets and liabilities given but information relating to sales and purchases not available.</p><p>Format for Statement of Affairs:</p><p><strong>OPENING STATEMENT OF AFFAIRS</strong></p><table border="1" style="width:400px"><thead><tr><th>ASSETS</th><th>N</th><th>CAPITAL AND LIABILITIES</th><th>N</th></tr></thead><tbody><tr><td>FIXED ASSETS</td><td>XX</td><td>OPENING CAPITAL</td><td>XX</td></tr><tr><td>CURRENT ASSETS</td><td>XX</td><td>LIABILITIES</td><td>XX</td></tr><tr><td>TOTAL</td><td>XX</td><td>TOTAL</td><td>XX</td></tr></tbody></table><p><strong>CLOSING STATEMENT OF AFFAIRS</strong></p><table border="1" style="width:400px"><thead><tr><th>ASSETS</th><th>N</th><th>CAPITAL AND LIABILITIES</th><th>N</th></tr></thead><tbody><tr><td>FIXED ASSETS</td><td>XX</td><td>CLOSING CAPITAL</td><td>XX</td></tr><tr><td>CURRENT ASSETS</td><td>XX</td><td>LIABILITIES</td><td>XX</td></tr><tr><td>TOTAL</td><td>XX</td><td>TOTAL</td><td>XX</td></tr></tbody></table><p><strong>STATEMENT OF PROFIT OR LOSS</strong></p><table border="1" style="width:300px"><thead><tr><th>Item</th><th>N</th><th>N</th></tr></thead><tbody><tr><td>Closing capital</td><td>XX</td></tr><tr><td>Add: Drawing</td><td>XX</td></tr><tr><td>Total</td><td>XX</td></tr><tr><td>Less: Opening capital</td><td>XX</td></tr><tr><td>Additional capital (if any)</td><td>XX</td><td>(XX)</td></tr><tr><td><strong>Net profit or loss</strong></td><td>XX</td></tr></tbody></table><p><strong>Formula for Calculating Profit/Loss:</strong></p><p>Profit/Loss = Closing Capital - Opening Capital - Additional Capital + Drawings</p><p>2. Conversion to Double Entry Method</p><p>This involves converting available information into proper double-entry records to reconstruct complete accounting records by applying the principles of double entry from the information available.</p><p>Steps include:</p><ul><li>Preparing ledger accounts for major items (sales, purchases, etc.).</li><li>Creating control accounts such as sales ledger control account, purchase ledger control account.</li><li>Preparing the cash book.</li><li>Creating a trial balance from these accounts.</li><li>Preparing final accounts.</li></ul><h2 style="text-align:center"><strong>Techniques for Determining Specific Missing Figures</strong></h2><p>1. Missing Sales</p><p>Sales can be calculated using:</p><ul><li>Gross profit margin or mark-up percentage.</li><li>Opening and closing inventory with purchases.</li></ul><p><strong>Formula:</strong></p><p>Cost of Goods Sold = Opening Inventory + Purchases - Closing Inventory</p><p>Sales = Cost of Goods Sold + Gross Profit</p><p>If gross profit is expressed as a percentage of sales:</p><pre><code>If Sales = X, and Gross Profit = Y% of X Then: X = Cost of Goods Sold / (1 - Y/100) </code></pre><p>2. Missing Purchases</p><p><strong>Formula:</strong></p><p>Purchases = Cost of Goods Sold + Closing Inventory - Opening Inventory</p><p>Cost of Goods Sold = Sales - Gross Profit</p><p>Therefore:</p><p>Purchases = Sales - Gross Profit + Closing Inventory - Opening Inventory</p><p>3. Missing Inventory</p><p><strong>Formula for Closing Inventory:</strong></p><p>Closing Inventory = Opening Inventory + Purchases - Cost of Goods Sold</p><p>4. Missing Expenses</p><p><strong>Formula:</strong></p><pre><code>Total Expenses = Gross Profit - Net Profit </code></pre><p>5. Missing Capital</p><p><strong>Formula:</strong></p><pre><code>Capital = Assets - Liabilities </code></pre><p>6. Missing Cash/Bank Balances</p><p>This is calculated by preparing a cash account with all receipts and payments.</p><h2 style="text-align:center"><strong>Control Accounts in Incomplete Records</strong></h2><p>When ledger balances are missing, control accounts can be prepared to determine the missing figures.</p><p>Debtors Control Account Example:</p><table border="1" style="width:400px"><thead><tr><th>Debit</th><th>N</th><th>Credit</th><th>N</th></tr></thead><tbody><tr><td>Opening Balance</td><td>XX</td><td>Cash received</td><td>XX</td></tr><tr><td>Credit Sales</td><td>XX</td><td>Discount allowed</td><td>XX</td></tr><tr><td>Bad debts</td><td>XX</td></tr><tr><td>Sales returns</td><td>XX</td></tr><tr><td>Closing Balance</td><td>XX</td></tr><tr><td><strong>Total</strong></td><td>XXX</td><td><strong>Total</strong></td><td>XXX</td></tr></tbody></table><p>Creditors Control Account Example:</p><table border="1" style="width:400px"><thead><tr><th>Debit</th><th>N</th><th>Credit</th><th>N</th></tr></thead><tbody><tr><td>Cash paid</td><td>XX</td><td>Opening Balance</td><td>XX</td></tr><tr><td>Discount received</td><td>XX</td><td>Credit Purchases</td><td>XX</td></tr><tr><td>Purchase returns</td><td>XX</td></tr><tr><td>Closing Balance</td><td>XX</td></tr><tr><td><strong>Total</strong></td><td>XXX</td><td><strong>Total</strong></td><td>XXX</td></tr></tbody></table><h2><strong>Mark-up and Margin Calculations</strong></h2><p>Mark-up: The percentage added to the cost price to determine selling price Margin: The percentage of the selling price that represents profit</p><p><strong>Formulas:</strong></p><pre><code>Mark-up = (Gross Profit / Cost of Goods Sold) × 100% Margin = (Gross Profit / Sales) × 100% </code></pre><p><strong>Conversion between Mark-up and Margin:</strong></p><pre><code>Mark-up = Margin / (100% - Margin) × 100% Margin = Mark-up / (100% + Mark-up) × 100% </code></pre><h2>Fixed Assets and Depreciation in Incomplete Records</h2><p>When fixed asset records are incomplete, you must:</p><ol><li>Calculate missing depreciation using formula: <ul><li>Straight-line method: <code>Depreciation = (Cost - Residual Value) / Useful Life</code></li><li>Reducing balance method: <code>Depreciation = Net Book Value × Depreciation Rate</code></li></ul></li><li>Determine missing net book values: <code>Net Book Value = Cost - Accumulated Depreciation</code></li><li>Account for asset disposals: <code>Profit/Loss on Disposal = Proceeds - Net Book Value at disposal date</code></li></ol><h2 style="text-align:center"><strong>Rate of Stock Turnover</strong></h2><p>This measures how quickly inventory is sold and replaced.</p><p><strong>Formula:</strong></p><pre><code>Rate of Stock Turnover = Cost of Goods Sold / Average Stock Where Average Stock = (Opening Stock + Closing Stock) / 2 </code></pre><h2 style="text-align:center"><strong>Bank Reconciliation with Missing Figures</strong></h2><p>To find missing figures in bank reconciliation:</p><p><strong>Process:</strong></p><ol><li>Start with the cash book balance.</li><li>Add items in cash book not in bank statement.</li><li>Subtract items in bank statement not in cash book.</li><li>The result should equal the bank statement balance.</li></ol><h2 style="text-align:center"><strong>Suspense Accounts in Incomplete Records</strong></h2><p>When a trial balance does not balance due to incomplete information, a suspense account is used:</p><p><strong>Process:</strong></p><ol><li>Create a suspense account for the difference amount.</li><li>Identify the missing or incorrect entries.</li><li>Make journal entries to correct errors, using the suspense account.</li><li>Once all errors are corrected, the suspense account should have a zero balance.</li></ol><h2 style="text-align:center"><strong>VAT and Tax Calculations with Incomplete Records</strong></h2><p>For businesses with incomplete VAT records:</p><p><strong>VAT Calculation Process:</strong></p><pre><code>Output VAT = Sales × VAT Rate Input VAT = Purchases × VAT Rate VAT Payable = Output VAT - Input VAT </code></pre><p>When sales or purchases figures are missing:</p><pre><code>If Output VAT and VAT Rate are known: Sales = Output VAT ÷ VAT Rate </code></pre><h2>Worked Examples</h2><p>Example 1: Calculation of Missing Sales</p><p>A trader had opening inventory of ₦15,000, made purchases of ₦85,000, and had closing inventory of ₦20,000. If the gross profit margin is 25% on sales, calculate the sales for the period.</p><p><strong>Solution:</strong></p><table border="1" style="width:400px"><thead><tr><th>Step</th><th>Calculation</th><th>Amount (₦)</th></tr></thead><tbody><tr><td>1. Calculate Cost of Goods Sold</td><td>Opening Inventory + Purchases - Closing Inventory</td><td>15,000 + 85,000 - 20,000 = 80,000</td></tr><tr><td>2. Set up equation</td><td>If Sales = X, then Gross Profit = 0.25X</td></tr><tr><td>3. Use the relationship</td><td>Sales = Cost of Goods Sold + Gross Profit</td><td>X = 80,000 + 0.25X</td></tr><tr><td>4. Solve for X</td><td>0.75X = 80,000</td><td>X = 106,667</td></tr></tbody></table><p>Therefore, Sales = ₦106,667</p><p>Example 2: Calculation of Missing Purchases</p><p>A trader had opening inventory of ₦18,000, sales of ₦150,000, and closing inventory of ₦22,000. If the gross profit is 30% of sales, calculate the purchases for the period.</p><p><strong>Solution:</strong></p><table border="1" style="width:400px"><thead><tr><th>Step</th><th>Calculation</th><th>Amount (₦)</th></tr></thead><tbody><tr><td>1. Calculate Gross Profit</td><td>30% of Sales</td><td>30% of 150,000 = 45,000</td></tr><tr><td>2. Calculate Cost of Goods Sold</td><td>Sales - Gross Profit</td><td>150,000 - 45,000 = 105,000</td></tr><tr><td>3. Calculate Purchases</td><td>Cost of Goods Sold + Closing Inventory - Opening Inventory</td><td>105,000 + 22,000 - 18,000 = 109,000</td></tr></tbody></table><p>Therefore, Purchases = ₦109,000</p><p>Example 3: Calculation of Missing Capital</p><p>On January 1, 2023, a trader's statement of affairs showed total assets of ₦350,000 and liabilities of ₦120,000. During the year, he introduced additional capital of ₦50,000 and made drawings of ₦75,000. On December 31, 2023, his total assets were ₦420,000 and liabilities were ₦90,000. Calculate the profit or loss for the year.</p><p><strong>Solution:</strong></p><table border="1" style="width:400px"><thead><tr><th>Step</th><th>Calculation</th><th>Amount (₦)</th></tr></thead><tbody><tr><td>1. Calculate Opening Capital</td><td>Total Assets - Total Liabilities</td><td>350,000 - 120,000 = 230,000</td></tr><tr><td>2. Calculate Closing Capital</td><td>Total Assets - Total Liabilities</td><td>420,000 - 90,000 = 330,000</td></tr><tr><td>3. Calculate Profit/Loss</td><td>Closing Capital - Opening Capital - Additional Capital + Drawings</td><td>330,000 - 230,000 - 50,000 + 75,000 = 125,000</td></tr></tbody></table><p>Therefore, Profit = ₦125,000</p>`
  },
  {
    id: 2016,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'INCOMPLETE RECORDS',
    subtopic: 'Single To Double Entry',
    summary_60s: 'CONVERSION OF SINGLE ENTRY TO DOUBLE ENTRY/ PREPARATION OF FINAL ACCOUNT FROM INCOMPLETE RECORD It is indeed possible to prepare complete records to be reconstructed by applying the principle of double entry from the information available. The books or records necessary for that ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Single To Double Entry in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>CONVERSION OF SINGLE ENTRY TO DOUBLE ENTRY/ PREPARATION OF FINAL ACCOUNT FROM INCOMPLETE RECORD</strong>It is indeed possible to prepare complete records to be reconstructed by applying the principle of double entry from the information available. The books or records necessary for that includes sales ledger control account, purchase ledger control account, sales journal, purchase journal, cash book, assets and liabilities account and nominal account. <strong>ILLUSTRATION</strong>The cash summary of Mr. John ltd shows the following transaction in the year ended 31/10/2003<strong>CASH BOOK</strong></p><table border="1"><tbody><tr><td>Bal b/f Cash from creditors Additional capital</td><td><s>N</s> 11715 91175 <u>30000</u><strong><u>132890</u></strong></td><td>Cash paid to creditors Salaries Postage General expenses Drawings Rent Bal c/d</td><td><s>N</s> 55280 5400 1200 6170 12500 2850 <u>49490</u><strong><u>132890</u></strong></td></tr></tbody></table><p><strong>Additional information</strong>1/9/2002 31/10/2003<s>N</s><s>N</s>Creditors 4900 5255Stock 2500 1700Accrued salaries 2100 375Rent prepaid 220 335Debtors 6010 4940Required; Prepare</p><ol style="list-style-type:lower-roman"><li>Statement of affairs as at 1/9/2003.</li><li>Debtor and creditor control account.</li><li>Trading profit and loss account.</li><li>Balance sheet as at 31 October 2003.</li></ol><p><strong>SOLUTION</strong><strong>MR JOHN LTD</strong><strong>STATEMENT OF AFFAIRS AS AT SEPTEMBER 1<sup>ST</sup> 2002</strong></p><table border="1"><tbody><tr><td>Opening Capital Current liabilities Creditors Salaries</td><td><s>N</s> 13745 4900 <u>2100</u><strong><u>20745</u></strong></td><td>Fixed Asset Current Asset Stock Debtors Bill receivable</td><td><s>N</s> 2800 220 <u>6010</u><strong><u>20745</u></strong></td></tr></tbody></table><p><strong>DEBTORS/SALES CONTROL ACCOUNT</strong></p><table border="1"><tbody><tr><td>Bal b/f Sales</td><td><s>N</s> 6010 <u>90105</u><strong><u>96115</u></strong></td><td>Cash Bal c/d</td><td><s>N</s> 91175 <u>4940</u><strong><u>96115</u></strong></td></tr></tbody></table><p><strong>CREDITOR/PURCHASE CONTROL ACCOUNT</strong></p><table border="1"><tbody><tr><td>Cash Bal c/d</td><td><s>N</s> 55280 <u>5255</u><strong><u>60535</u></strong></td><td>Bal b/f Purchase</td><td><s>N</s> 4900 <u>55635</u><strong><u>60535</u></strong></td></tr></tbody></table><p><strong>STATEMENT OF TRADING PROFIT &amp; LOSS ACCOUNT FOR THE YEAR ENDED 31/10/2003</strong><strong><s>N</s></strong><strong><s>N</s><s>N</s></strong>Sales 90105Less Return inward <u>-</u><u>90105</u>Net sales 90105<strong>Cost of goods sold</strong>Opening inventory 2800Add: Purchase 55280Carriage inward <u>-</u> 55280Less: Return outward <u>(-)</u>Cost of goods available for sale 58435Less closing stock <u>(1700)</u><u>(56755)</u>GROSS PROFIT <u>33370</u>GROSS PROFIT b/d 33370Add: Discount received -Bank Interest -Commission received -Decrease in provision for bad debt -Profit on sales of fixed asset -Recovery of bad debt -(any other income/gain received) <u>-</u> -33370EXPENSESWages and salaries 3675Postages 1200Rent and rates 2735General expenses 6170 (<u>13780)</u>Net profit before tax 19590Tax <u>(-)</u>Net profit after tax <u>19590</u><strong>BALANCE SHEET AS AT 31 DECEMBER 2003</strong><strong>ASSETS</strong><strong>Non-current asset </strong><strong> Cost </strong><strong> Depreciation</strong><strong> NBV</strong><strong>Fixed assets - - -</strong><strong>Current Assets</strong>Closing inventory 1700Cash 49490Debtors 4940Less; bad debts <u>-</u><u>4940</u><u>56465</u><strong>TOTAL ASSETS</strong><u>56465</u><strong>EQUITY AND LIABILITIES</strong><strong>Equity</strong>Capital 13745Add: additional capital <u>30000</u> 43745Net profit 19590Less: drawings <u>(12500)</u> (<u>12500)</u><strong>TOTAL EQUITY </strong> 50835<strong>Non-current liabilities</strong>%Debentures -<strong>Current Liabilities</strong>Creditors 5255Accrued salaries <u>375</u><u>5630</u><strong>TOTAL LIABILITIES</strong></p>`
  },
  {
    id: 2017,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DIFFERENT ACCOUNTS',
    subtopic: 'Manufacturing Accounts',
    summary_60s: 'Manufacturing accounts are prepared to ascertain the cost of goods produced during a financial year. Manufacturing companies transform raw materials into finished goods (e.g., Nestle, Cadbury, PZ) before selling them to customers. Unlike trading companies that buy and sell goods,',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Manufacturing Accounts in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Manufacturing accounts are prepared to ascertain the cost of goods produced during a financial year.</p><p>Manufacturing companies transform raw materials into finished goods (e.g., Nestle, Cadbury, PZ) before selling them to customers. Unlike trading companies that buy and sell goods, manufacturing companies produce what they sell.</p><h2 style="text-align:center"><strong>Purpose of Manufacturing Accounts</strong></h2><ol><li>To ascertain the cost of production during the financial year.</li><li>To determine the profit or loss on the manufacturing process.</li><li>To provide information for pricing decisions.</li><li>To help in controlling production costs.</li></ol><h2 style="text-align:center"><strong>Elements of Cost of Production</strong></h2><p>Costs in a manufacturing business are classified into two main categories:</p><p>1. Direct Costs (Prime Cost)</p><p>These are costs that can be directly traced to a specific production unit:</p><ul><li><strong>Direct Materials</strong>: Raw materials that become part of the finished product</li><li><strong>Direct Labor/Wages</strong>: Wages paid to workers directly engaged in production (e.g., machine operators, factory foremen)</li><li><strong>Direct Expenses</strong>: Expenses directly identified with production (e.g., royalties, patent fees)</li></ul><p><strong>PRIME COST = Direct Materials + Direct Labor + Direct Expenses</strong></p><p>2. Indirect Costs (Factory Overheads)</p><p>These are costs that cannot be directly traced to a specific production unit but are necessary for production:</p><ul><li>Factory rent and rates.</li><li>Depreciation of plant and machinery.</li><li>Indirect wages (e.g., cleaners, crane drivers).</li><li>Factory power, lighting, and heating.</li><li>Factory insurance.</li><li>Repairs and maintenance of machinery.</li><li>Factory supervision costs.</li></ul><p><strong>COST OF PRODUCTION = Prime Cost + Factory Overheads</strong></p><h2 style="text-align:center"><strong>Important Terminology in Manufacturing Accounts</strong></h2><p>Inventory (Stock)</p><p>Materials used in the production process fall into three categories:</p><ol><li><strong>Raw Materials</strong>: Materials used to convert goods from one form to another</li><li><strong>Work-in-Progress (WIP)</strong> : Partly completed goods awaiting further processing</li><li><strong>Finished Goods</strong>: Completed goods awaiting sale</li></ol><p>Direct Wages</p><p>Wages paid to employees directly engaged in the production process (e.g., machine operators, factory foremen, goods packers).</p><p>Direct Labor</p><p>Expenditure incurred on labor operations that can be traced to a particular production unit.</p><p>Direct Expenses</p><p>Expenses that have direct identification with production (e.g., royalties, patent fees).</p><p>Factory Overhead</p><p>Expenditure incurred in running the factory that cannot be traced to a particular production unit but is necessary for production.</p><p>Indirect Wages</p><p>Amounts paid to people who are not directly involved in production but whose services support the production process (e.g., factory cleaners, security personnel).</p><h2>Format of Manufacturing Account</h2><pre><code> N N COST OF PRODUCTION Opening stock of raw materials XX Add: Purchases of raw materials XX Carriage inwards of materials XX XX XX Less: Return outwards of raw materials (XX) XX Cost of raw materials available for use XX Less: Closing stock of raw materials (XX) Cost of raw materials consumed XX Add: Direct wages XX Direct labor XX Direct expenses XX Royalties XX XX PRIME COST XX Add: Factory overheads: Indirect wages XX Factory power XX Factory rent &amp; rates XX Factory lighting XX Factory insurance XX Factory heating XX Depreciation of plant &amp; machinery XX XX XX Add: Opening stock of WIP XX XX Less: Closing stock of WIP (XX) COST OF PRODUCTION XX </code></pre><h2>Format of Manufacturing Trading Account</h2><pre><code> N N Sales XX Less: Sales returns (XX) Net sales XX Cost of goods sold: Opening stock of finished goods XX Add: Cost of production XX XX Less: Closing stock of finished goods (XX) (XX) GROSS PROFIT/LOSS XX </code></pre><h2>Format of Manufacturing Profit and Loss Account</h2><pre><code> N N Gross profit b/d XX Add: Discount received XX Commission received XX Any other income XX XX XX Less: Expenses Selling and distribution expenses: Carriage outwards XX Commission paid XX Salesmen's salaries XX Discount allowed XX Advertising XX (XX) Administrative expenses: Office rent and rates XX Office insurance XX Office lighting XX Office machine depreciation XX General expenses XX Traveling expenses XX (XX) NET PROFIT/LOSS XX </code></pre><h2>Manufacturing Balance Sheet</h2><pre><code>ASSETS N N Non-current assets: Cost Depreciation NBV Land and building XX (XX) XX Motor vehicles XX (XX) XX Furniture and fittings XX (XX) XX Plant and machinery XX (XX) XX Freehold premises XX (XX) XX XX Current Assets: Closing inventory: Raw materials XX Work-in-progress XX Finished goods XX XX Trade receivables (Debtors) XX Less: Provision for bad debts (XX) XX Cash at bank XX Cash in hand XX Bills receivable XX Prepayments XX Interest on deposit XX XX TOTAL ASSETS XX EQUITY AND LIABILITIES Equity: Capital XX Add: Net profit XX XX Less: Drawings (XX) TOTAL EQUITY XX Non-current liabilities: Debentures XX Current Liabilities: Trade payables (Creditors) XX Bank overdraft XX Accrued expenses XX Bills payable XX Loans XX TOTAL LIABILITIES XX TOTAL EQUITY AND LIABILITIES XX </code></pre><h2>Transfer Pricing</h2><p>In the trading account, the cost of production is charged to determine profit on sales. The charging of cost of production can be done in two ways:</p><ol><li><strong>Actual Factory Cost</strong>: When goods are transferred to the trading account at the exact cost of production</li><li><strong>Current Market Value</strong>: When goods are transferred to the trading account at market value</li></ol><p>When goods manufactured are charged at current market value to the trading account, the manufacturing account will show a balance representing a profit or loss on production, which is transferred to the profit and loss account.</p><h2>Key Differences Between Manufacturing and Trading Businesses</h2><table border="1" style="width:400px"><thead><tr><th>Manufacturing Business</th><th>Trading Business</th></tr></thead><tbody><tr><td>Produces goods before selling</td><td>Buys goods for resale</td></tr><tr><td>Prepares manufacturing account</td><td>Does not prepare manufacturing account</td></tr><tr><td>Cost of production + Profit = Selling price</td><td>Cost of goods sold + Profit = Selling price</td></tr><tr><td>Costs classified as direct and indirect</td><td>Costs classified as cost of goods sold and operating expenses</td></tr><tr><td>Three types of inventory: raw materials, WIP, finished goods</td><td>Only one type of inventory: trading stock</td></tr></tbody></table><h2>Worked Example</h2><p><strong>The following is extracted from the books of Zakilo Ltd., a manufacturer of furniture, as at the year ended December 31, 2003:</strong></p><pre><code> N Stock of raw materials 1/1/03 2,000 31/12/03 1,150 Purchase of raw materials 15,000 Factory wages 12,000 Direct expenses 500 Factory rent 1,160 Factory repair 2,010 Stock of finished goods 1/1/03 4,050 31/12/03 3,000 Indirect wages supervisor 5,000 Plant repairs 3,090 Work manager salary 1,140 Insurance for factory 2,000 Sales 65,000 Sales return 500 Administrative overhead: Office salary 2,000 General expenses 3,000 Selling overhead: Salary of salesmen 5,000 Sales commission 500 Advertising expenses 2,050 Public relations materials 1,000 Work in progress 1/1/03 300 31/12/03 400 Distribution expenses: Wages 800 Van expenses 900 </code></pre><p><strong>Solution:</strong></p><pre><code>ZAKILO LTD MANUFACTURING, TRADING, PROFIT AND LOSS ACCOUNT FOR THE YEAR ENDED 31/12/2003 N N COST OF PRODUCTION Opening stock of raw materials 2,000 Add: Purchases of raw materials 15,000 17,000 Less: Closing stock of raw materials (1,150) Cost of raw materials consumed 15,850 Add: Direct wages 12,000 Direct expenses 500 12,500 PRIME COST 28,350 Add: Factory overheads: Supervisor wages 5,000 Work manager salary 1,140 Factory rent 1,160 Plant repairs 3,090 Factory repair 2,010 Insurance factory 2,000 14,400 42,750 Add: Opening stock of WIP 300 43,050 Less: Closing stock of WIP (400) COST OF PRODUCTION 42,650 MANUFACTURING TRADING ACCOUNT Sales 65,000 Less: Sales return 500 64,500 Cost of goods sold: Opening stock of finished goods 4,050 Add: Cost of production 42,650 46,700 Less: Closing stock of finished goods (3,000) (43,700) GROSS PROFIT 20,800 MANUFACTURING PROFIT AND LOSS ACCOUNT Gross profit b/d 20,800 Less: Expenses Distribution expenses: Wages 800 Van expenses 900 1,700 Selling overhead: Sales commission 500 Salesman salary 5,000 Advertising expenses 2,050 Public relations 1,000 8,550 Administrative expenses: General expenses 3,000 Office salary 2,000 5,000 (15,250) NET PROFIT 5,550 </code></pre><h2><strong>Common Exam Questions</strong></h2><ol><li>Define and explain the purpose of manufacturing accounts.</li><li>Differentiate between prime cost and factory overhead.</li><li>Explain the difference between work-in-progress and finished goods.</li><li>Calculate the cost of production from given information.</li><li>Prepare a manufacturing, trading, profit and loss account.</li><li>Explain transfer pricing and its impact on manufacturing profit.</li><li>Identify and classify various manufacturing costs into their appropriate categories.</li></ol><h2><strong>Self-Assessment Questions</strong></h2><ol><li>What is the formula for calculating prime cost?</li><li>List three examples of factory overheads.</li><li>What is the difference between direct wages and indirect wages?</li><li>How is cost of production calculated?</li><li>What are the three types of inventory found in a manufacturing business?</li><li>What is transfer pricing and how does it affect manufacturing accounts?</li><li>Prepare a manufacturing account from the given trial balance.</li></ol>`
  },
  {
    id: 2018,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DIFFERENT ACCOUNTS',
    subtopic: 'Accounts Of Not-For-Profit',
    summary_60s: 'Businesses are usually established to make profit but not-for-profit making organizations like clubs, societies and charitable bodies are not profit oriented but are set up to provide services to their members. Due to this, the accounts prepared are different from the usual profi',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Accounts Of Not-For-Profit in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Businesses are usually established to make profit but not-for-profit making organizations like clubs, societies and charitable bodies are not profit oriented but are set up to provide services to their members.</p><p>Due to this, the accounts prepared are different from the usual profit-oriented business and they are shown below:</p><ol style="list-style-type:lower-alpha"><li>Receipts and payment account.</li><li>Income and expenditure account.</li><li>Statement of financial position.</li></ol><p><strong>RECEIPTS AND PAYMENT ACCOUNT</strong></p><p>This account shows the summary of the cash book over a particular period of time. Only receipts and payments are recorded as owing and prepaid will not be included. Some of the features include;</p><ol><li>It records both capital and revenue expenditure.</li><li>It has both opening and closing balance.</li><li>Items are treated the same way as the cash book.</li><li>It’s records are supported by source documents.</li><li>Its closing balance is transferred to the statement of financial position.</li></ol><p>However, there still remain some limitations to the receipt and payment account;</p><ol><li>Non-cash items are not disclosed.</li><li>It does not disclose accruals and prepayment.</li><li>It does not disclose profit on the sale or disposal of fixed assets.</li></ol><p>FORMAT</p><p><strong>RECEIPTS AND PAYMENT ACCOUNT</strong></p><table border="1"><tbody><tr><td>Balance b/f <p>Subscriptions</p><p>Bar takings</p><p>Donations</p></td><td><s>N</s><p>XX</p><p>XX</p><p>XX</p><p>XX</p></td><td>Bar expenses <p>Rent</p><p>Equipment bought</p><p>Wages</p><p>Postage</p><p>Secretary honorarium</p><p>Balance c/d</p></td><td><s>N</s><p>XX</p><p>XX</p><p>XX</p><p>XX</p><p>XX</p><p>XX</p><p>XX</p></td></tr><tr><td><strong>XX</strong></td><td><strong>XX</strong></td></tr></tbody></table><p><strong>INCOME AND EXPENDITURE ACCOUNT</strong></p><p>This account is based on the same principle as profit and loss account and it is often described as the equivalent of the profit and loss account prepared by a trading business. Below are some of the features of this account;</p><ol><li>Its closing balance represents surplus or deficit.</li><li>It allows for adjustment for accruals and prepayment.</li><li>It is prepared in the form of profit and loss account.</li><li>It records revenue receipts and revenue expenditure.</li></ol><p><strong>SOURCES OF INCOME TO NOT-FOR-PROFIT MAKING ORGANIZATIONS</strong></p><p>These are some of the means by which the organization gets funding to keep its operations running;</p><ol style="list-style-type:lower-alpha"><li>Subscriptions; this is the periodic amount paid by members to keep their membership.</li><li>Entrance fees; this is the registration fees paid by members on admission.</li><li>Donations: these are voluntary payments made to the organization by members or persons in the society.</li><li>Disposal of assets: these are funds realized when assets of the business are sold or disposed.</li><li>Interest from investment.</li><li>Proceeds from rentals.</li><li>Profits from bar: these are profits from bar operations.</li></ol><p><strong>FEATURES OF NOT-FOR-PROFIT MAKING ORGANIZATIONS</strong></p><ol><li>They fund their operations largely on the basis of contributions from their members.</li><li>Surplus are not distributed to members as dividends.</li><li>They engage more often in social or welfare activities of their members or their community.</li><li>They are not set up to make profit even though some of their activities may generate excess funds.</li></ol><p><strong>DIFFERENCES BETWEEN RECEIPTS AND PAYMENT ACCOUNT &amp; INCOME AND EXPENDITURE ACCOUNT (respectively)</strong></p><ol><li>Only cash transactions are recorded in receipts and payment whereas there’s room for accruals and prepayment in income and expenditure.</li><li>It includes capital items while income and expenditure does not include capital items.</li><li>Balance in receipts and payment represents cash in hand or bank overdraft while balance in income and expenditure represents surplus or deficiciency.</li></ol><p><strong>SIMILARITES BETWEEN RECEIPTS AND PAYMENT ACCOUNT &amp; INCOME AND EXPENDITURE ACCOUNT (respectively)</strong></p><ol><li>They are prepared on double entry basis.</li><li>Both are summaries of financial transactions.</li><li>They are made to cover the same period of time to allow for easy preparation of balance sheet.</li></ol><p><strong>FORMAT</strong></p><table border="1"><tbody><tr><td><strong>EXPENDITURE</strong></td><td><strong>N</strong></td><td><strong>INCOME</strong></td><td><strong>N</strong></td></tr><tr><td>Rent</td><td>XX</td><td>Subscriptions</td><td>XX</td></tr><tr><td>Wages</td><td>XX</td><td>Donations</td><td>XX</td></tr><tr><td>Postages</td><td>XX</td><td>Rent received</td><td>XX</td></tr><tr><td>Secretary honorarium</td><td>XX</td><td>Profit on bar</td><td>XX</td></tr><tr><td>Depreciation</td><td>XX</td></tr><tr><td>Lighting</td><td>XX</td></tr><tr><td>Surplus of income over expenditure</td><td>XX</td></tr><tr><td><strong>XX</strong></td><td><strong>XX</strong></td></tr></tbody></table><p><strong>TERMINOLOGIES USED IN NOT-FOR-PROFIT MAKING ORGANIZATIONS</strong></p><ol><li><strong>Subscription:</strong> this is the periodic contribution of members to the association or society. It can be paid quarterly or monthly and either in arrears or advance</li></ol><ol style="list-style-type:lower-alpha"><li>Subscription in advance: this is the sum of money due from members but remain unpaid. They are treated as debtors in the balance sheet.</li><li>Subscription in advance: this is the sum of money paid for future years by the members. It is treated as current liabilities item.</li></ol><ol start="2"><li><strong>Deficit:</strong> this is the excess of expenditure over income</li><li><strong>Surplus:</strong> this is the excess of income over expenditure.</li><li><strong>Expenditure:</strong> is the amount spent in order to acquire a commodity or service</li></ol><p><strong>ILLUSTRATION</strong></p><p>The following were the summary of LEKI association activities for the year ended 31 December 2016</p><p><s>N</s></p><p>Balance as at 1<sup>st</sup> January 2016 24155</p><p>Donations received 2100</p><p>Proceed from dance 18075</p><p>Subscription received 150000</p><p>General expenses 24448</p><p>Rate 5000</p><p>Interest received on bank deposit 6000</p><p>Transfer to bank deposit 60000</p><p>Repairs 8086</p><p>Wages paid 30150</p><p>Entrance fee received 2500</p><p>Equipment bought 20000</p><p>Stationery bought 4895</p><p>Additional information</p><ol style="list-style-type:lower-alpha"><li>General expenses include <s>N</s>1500 owing in the previous year</li><li>Wages of <s>N</s>2400 was due unpaid as 31/12/2016</li><li>Subscription received of <s>N</s>4000 was in arrears for the previous year <s>N</s>10000 was paid in advance for the next year and <s>N</s>6000 was still owing as at 31/12/2016</li><li>Rate prepaid amounted to <s>N</s>1000</li><li>The club had the following as at 1<sup>st</sup> January 2016;</li></ol><p>Bank deposit <s>N</s>200000</p><p>Club house <s>N</s>480000</p><p>Equipment <s>N</s>300000</p><ol start="6" style="list-style-type:lower-alpha"><li>Depreciation of club house by 5% and equipment 10%.</li></ol><p><strong><u>SOLUTION</u></strong></p><p><strong>LEKI ASSOCIATION</strong></p><p><strong>RECEIPTS AND PAYMENT ACCOUNT</strong></p><table border="1"><tbody><tr><td><strong>RECEIPTS</strong><p>Balance b/f</p><p>Donation received</p><p>Proceed from dance</p><p>Subscription received</p><p>Interest on bank deposit</p><p>Entrance fee</p></td><td><strong><s>N</s></strong><p>24155</p><p>2100</p><p>18075</p><p>150000</p><p>6000</p><p>2500</p></td><td><strong>PAYMENT</strong><p>General expenses</p><p>Rate</p><p>Bank charges</p><p>Repairs</p><p>Wage paid</p><p>Equipment</p><p>Stationery</p><p><strong>Bal c/d</strong></p></td><td><strong><s>N</s></strong><p>24448</p><p>5000</p><p>60000</p><p>8086</p><p>36150</p><p>26000</p><p>4895</p><p><strong>44251</strong></p></td></tr><tr><td>202830</td><td>202830</td></tr></tbody></table><p><strong>SUBSCRIPTION ACCOUNT</strong></p><table border="1"><tbody><tr><td>Bal b/f <p>Bal c/f</p><p>Income and expenditure</p></td><td><strong><s>N</s></strong><p>4000</p><p>10000</p><p>142000</p></td><td>Cash <p>Bal b/d</p></td><td><strong><s>N</s></strong><p>150000</p><p>6000</p></td></tr><tr><td><strong>156000</strong></td><td><strong>156000</strong></td></tr></tbody></table><p>NB: Subscription of N10000 is a liability</p><p>Subscription of N6000 is an asset</p><p><strong>LEKI ASSOCIATION</strong></p><p><strong>INCOME AND EXPENDITURE ACCOUNT</strong></p><table border="1"><tbody><tr><td><strong>INCOME</strong></td><td><strong><s>N</s></strong></td><td><strong>N</strong></td><td><strong>EXPENDITURE</strong></td><td><strong><s>N</s></strong></td></tr><tr><td>General expenses <p>Less owing</p><p>Rate</p><p>Less prepaid</p><p>Wages</p><p>Add owing</p><p>Repair</p><p>Stationery</p><p>Equipment depreciation (10%)</p><p>Club house (5%)</p><p>Surplus/excess of income over expenditure</p></td><td>24448 <p><u>1500</u></p><p>5000</p><p><u>1000</u></p><p>36150</p><p><u>2400</u></p></td><td>22948 <p>4000</p><p>38550</p><p>8086</p><p>4895</p><p>32000</p><p>24000</p><p>36196</p><p><strong>170675</strong></p></td><td>Proceed from dance <p>Interest on bank deposit</p><p>Donation received</p><p>Entrance fees</p><p>Subscription</p></td><td>18075 <p>6000</p><p>2100</p><p>2500</p><p>142000</p><p><strong>170675</strong></p></td></tr></tbody></table><p><strong>STATEMENT OF AFFAIRS ACCOUNT</strong></p><table border="1"><tbody><tr><td>Accumulated fund <p><strong>Current Liabilities</strong></p><p>General expenses owing</p></td><td><strong><s>N</s></strong><p>1006655</p><p>1500</p></td><td><strong>Fixed assets</strong><p>Club house</p><p>Equipment</p><p><strong>Current asset</strong></p><p>Bank deposit</p><p>Subscription in arrears</p><p>Cash balance</p></td><td><strong><s>N</s></strong><p>480000</p><p>300000</p><p>200000</p><p>4000</p><p>24155</p></td></tr><tr><td><strong>1008155</strong></td><td><strong>1008155</strong></td></tr></tbody></table><p><strong>LEKI ASSOCIATION</strong></p><p><strong>STATEMENT OF FINANCIAL POSITION AS AT 31/12/16</strong></p><table border="1"><tbody><tr><td>Accumulated fund <p>Add surplus of income over expenditure</p><p>Current liabilities</p><p>Subscription in advance</p><p>Wages accrued</p></td><td><strong><s>N</s></strong><p>1006655</p><p>36196</p><p>1042851</p><p>10000</p><p>2400</p></td><td>Club house <p>Less depreciation</p><p>Equipment</p><p>Additions</p><p>Less depreciations</p><p><strong>Current assets</strong></p><p>Subscription in arrears</p><p>Cash in hand</p><p>Rent prepaid</p><p>Bank deposit</p></td><td><strong><s>N</s></strong><p>480000</p><p><u>24000</u></p><p>300000</p><p>20000</p><p><u>(32000)</u></p><p>6000</p><p>44251</p><p>1000</p><p>260000</p></td><td><strong><s>N</s></strong><p>456000</p><p>288000</p><p>311251</p></td></tr><tr><td><strong>1055251</strong></td><td><strong>1055251</strong></td></tr></tbody></table>`
  },
  {
    id: 2019,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DIFFERENT ACCOUNTS',
    subtopic: 'Departmental Accounts',
    summary_60s: 'Departmental accounting is the process of preparing separate accounts for different departments of an organization to evaluate their individual performance. It separates the activities of a business to compare results and assists management in formulating policies and making info',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Departmental Accounts in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Departmental accounting is the process of preparing separate accounts for different departments of an organization to evaluate their individual performance. It separates the activities of a business to compare results and assists management in formulating policies and making informed decisions.</p><h2>OBJECTIVES OF DEPARTMENTAL ACCOUNTS</h2><ol><li>To determine the profitability of each department.</li><li>To identify which departments are profitable and which are operating at a loss.</li><li>To guide management in decision-making processes, including the potential closure of unprofitable departments.</li><li>To evaluate the performance of departmental managers.</li><li>To assist in establishing effective control measures for each department.</li></ol><h2>ADVANTAGES OF DEPARTMENTAL ACCOUNTS</h2><ol><li>It provides information for effective decision-making for each department.</li><li>The gross profit and net profit of each department can be ascertained separately.</li><li>Unprofitable departments are easily identified.</li><li>The progress and performance of each department can be monitored.</li><li>It facilitates better internal control and performance evaluation.</li><li>It enables effective comparison between departments.</li><li>It helps in determining appropriate resource allocation.</li></ol><h2>APPORTIONMENT OF EXPENSES</h2><p>Common expenses that benefit multiple departments must be apportioned using appropriate bases. The following methods can be used as bases for apportioning expenses:</p><p>1. Turnover/Sales Basis</p><p>Expenses are apportioned based on the proportion of sales or purchases of each department.</p><p><strong>Formula:</strong> Department's expense = (Department's turnover ÷ Total turnover) × Total expense</p><p><strong>Example:</strong></p><ul><li>Department A sales: ₦10,000.</li><li>Department B sales: ₦12,000.</li><li>Total selling expenses to be apportioned: ₦1,320.</li></ul><p><strong>Solution:</strong></p><ul><li>Department A: (₦10,000 ÷ ₦22,000) × ₦1,320 = ₦600.</li><li>Department B: (₦12,000 ÷ ₦22,000) × ₦1,320 = ₦720.</li></ul><p>2. Floor Space Basis</p><p>Expenses related to building maintenance, rent, rates, lighting, etc., are apportioned based on the floor area occupied by each department.</p><p><strong>Formula:</strong> Department's expense = (Department's floor area ÷ Total floor area) × Total expense</p><p><strong>Example:</strong></p><ul><li>Total rent and rates: ₦5,000.</li><li>Department A occupies 1/5 of the total space.</li><li>Department B occupies 4/5 of the total space.</li></ul><p><strong>Solution:</strong></p><ul><li>Department A: 1/5 × ₦5,000 = ₦1,000.</li><li>Department B: 4/5 × ₦5,000 = ₦4,000.</li></ul><p>3. Number of Employees Basis</p><p>Expenses like staff welfare, canteen expenses, and training costs are apportioned based on the number of employees in each department.</p><p><strong>Formula:</strong> Department's expense = (Department's number of employees ÷ Total employees) × Total expense</p><p>4. Number of Articles/Stock Sold Basis</p><p>Expenses are apportioned based on the quantity of goods sold by each department.</p><p><strong>Formula:</strong> Department's expense = (Department's quantity sold ÷ Total quantity sold) × Total expense</p><p>5. Direct Analysis Basis</p><p>Some expenses can be directly identified with specific departments after proper analysis.</p><p>6. Time Basis</p><p>Expenses are apportioned based on the time spent on each department.</p><p><strong>Formula:</strong> Department's expense = (Time spent on department ÷ Total time) × Total expense</p><h2>INTER-DEPARTMENTAL TRANSFERS</h2><p>When goods are transferred from one department to another:</p><ul><li>The value must be deducted from the transferring department's purchases/cost of goods.</li><li>The same value must be added to the receiving department's purchases/cost of goods.</li></ul><h2>COMMISSION ON PROFITS</h2><p>When commission is paid to managers based on departmental profits:</p><p><strong>Formula:</strong> Commission = (Percentage commission ÷ (100 + Percentage commission)) × Profit before commission</p><p><strong>Example:</strong></p><ul><li>If the commission rate is 5%, then:.</li><li>Commission = (5 ÷ 105) × Profit before commission.</li></ul><h2>FORMAT OF DEPARTMENTAL TRADING, PROFIT AND LOSS ACCOUNT</h2><pre><code> Dept A Dept B Dept C Total ₦ ₦ ₦ ₦ Sales XXX XXX XXX XXX Less: Returns inwards (XX) (XX) (XX) (XX) Net sales XXX XXX XXX XXX Cost of goods sold: Opening inventory XXX XXX XXX XXX Add: Purchases XXX XXX XXX XXX Add: Carriage inwards XX XX XX XX XXX XXX XXX XXX Less: Returns outwards (XX) (XX) (XX) (XX) Cost of goods available XXX XXX XXX XXX Less: Closing inventory (XX) (XX) (XX) (XX) Cost of goods sold (XXX) (XXX) (XXX) (XXX) GROSS PROFIT/LOSS XXX XXX XXX XXX Add: Other income Discount received XX XX XX XX (Any other income) XX XX XX XX XXX XXX XXX XXX Less: Expenses Wages and salaries (XX) (XX) (XX) (XX) Rent and rates (XX) (XX) (XX) (XX) Insurance (XX) (XX) (XX) (XX) Lighting and heating (XX) (XX) (XX) (XX) Repairs and maintenance (XX) (XX) (XX) (XX) Advertising (XX) (XX) (XX) (XX) Transport/Delivery expenses(XX) (XX) (XX) (XX) Electricity (XX) (XX) (XX) (XX) Discount allowed (XX) (XX) (XX) (XX) Bad debts (XX) (XX) (XX) (XX) Carriage outward (XX) (XX) (XX) (XX) Depreciation (XX) (XX) (XX) (XX) (Other expenses) (XX) (XX) (XX) (XX) Total expenses (XXX) (XXX) (XXX) (XXX) NET PROFIT/LOSS XXX XXX XXX XXX </code></pre><h2>DEPARTMENTAL BALANCE SHEET</h2><p>The balance sheet follows the normal procedure, but assets and liabilities are not usually separated into departments unless specifically required.</p><h2>COMPREHENSIVE EXAMPLE</h2><p>Question:</p><p>The following balances are extracted from the books of G &amp; G Ltd for the year ended December 31, 2009:</p><pre><code> ₦ Rent and rates 246 Delivery expenses 70 Insurance 80 Commission paid 350 Sales: Beans department 5,200 Rice department 6,800 Flour department 3,000 Depreciation 210 Advertising 121 Salaries 1,830 Discount received 77 Administrative expenses 456 Purchases: Beans department 3,000 Rice department 4,500 Flour department 2,500 Opening inventory: Beans department 700 Rice department 1,200 Flour department 300 Closing inventory: Beans department 1,000 Rice department 1,500 Flour department 500 </code></pre><p>Additional information:</p><ul><li>Expenses are to be apportioned as follows: <ul><li>Salaries, depreciation, rent and rates, and administrative expenses: equally among all departments.</li><li>Insurance: in the ratio 5:3:2 to Beans, Rice, and Flour departments respectively.</li><li>Discount received: charged to purchases.</li><li>Advertising, commission paid, and delivery expenses: charged to sales.</li></ul></li></ul><p>Required: Prepare G &amp; G Ltd departmental statement of trading, profit and loss account for the year ended December 31, 2009.</p><p>Solution:</p><p><strong>G &amp; G LTD</strong><strong> DEPARTMENTAL TRADING, PROFIT AND LOSS ACCOUNT</strong><strong> FOR THE YEAR ENDED DECEMBER 31, 2009</strong></p><pre><code> Beans Dept Rice Dept Flour Dept Total ₦ ₦ ₦ ₦ Sales 5,200 6,800 3,000 15,000 Less: Returns inwards (-) (-) (-) (-) Net sales 5,200 6,800 3,000 15,000 Cost of goods sold: Opening inventory 700 1,200 300 2,200 Add: Purchases 3,000 4,500 2,500 10,000 Add: Carriage inwards (-) (-) (-) (-) 3,700 5,700 2,800 12,200 Less: Returns outwards (-) (-) (-) (-) Cost of goods available 3,700 5,700 2,800 12,200 Less: Closing inventory (1,000) (1,500) (500) (3,000) Cost of goods sold 2,700 4,200 2,300 9,200 GROSS PROFIT/LOSS 2,500 2,600 700 5,800 Add: Discount received 23.1 34.7 19.2 77 2,523.1 2,634.7 719.2 5,877 Less: Expenses Salaries (610) (610) (610) (1,830) Rent and rates (82) (82) (82) (246) Insurance (40) (24) (16) (80) Commission paid (121.3) (158.7) (70) (350) Delivery expenses (24.3) (31.7) (14) (70) Advertising (41.9) (54.9) (24.2) (121) Administrative expenses (152) (152) (152) (456) Depreciation (70) (70) (70) (210) Total expenses (1,141.5) (1,183.3) (1,038.2) (3,363) NET PROFIT/(LOSS) 1,381.6 1,451.4 (319) 2,514 </code></pre><p>Workings:</p><ol><li><strong>Discount received</strong> (based on purchases): <ul><li>Total purchases = ₦3,000 + ₦4,500 + ₦2,500 = ₦10,000.</li><li>Beans: (₦3,000 ÷ ₦10,000) × ₦77 = ₦23.1.</li><li>Rice: (₦4,500 ÷ ₦10,000) × ₦77 = ₦34.7.</li><li>Flour: (₦2,500 ÷ ₦10,000) × ₦77 = ₦19.2.</li></ul></li><li><strong>Advertising</strong> (based on sales): <ul><li>Total sales = ₦5,200 + ₦6,800 + ₦3,000 = ₦15,000.</li><li>Beans: (₦5,200 ÷ ₦15,000) × ₦121 = ₦41.9.</li><li>Rice: (₦6,800 ÷ ₦15,000) × ₦121 = ₦54.9.</li><li>Flour: (₦3,000 ÷ ₦15,000) × ₦121 = ₦24.2.</li></ul></li><li><strong>Commission paid</strong> (based on sales): <ul><li>Beans: (₦5,200 ÷ ₦15,000) × ₦350 = ₦121.3.</li><li>Rice: (₦6,800 ÷ ₦15,000) × ₦350 = ₦158.7.</li><li>Flour: (₦3,000 ÷ ₦15,000) × ₦350 = ₦70.</li></ul></li><li><strong>Delivery expenses</strong> (based on sales): <ul><li>Beans: (₦5,200 ÷ ₦15,000) × ₦70 = ₦24.3.</li><li>Rice: (₦6,800 ÷ ₦15,000) × ₦70 = ₦31.7.</li><li>Flour: (₦3,000 ÷ ₦15,000) × ₦70 = ₦14.</li></ul></li><li><strong>Salaries, Depreciation, Rent and rates, Administrative expenses</strong> (equally): <ul><li>Salaries: ₦1,830 ÷ 3 = ₦610 per department.</li><li>Depreciation: ₦210 ÷ 3 = ₦70 per department.</li><li>Rent and rates: ₦246 ÷ 3 = ₦82 per department.</li><li>Administrative expenses: ₦456 ÷ 3 = ₦152 per department.</li></ul></li><li><strong>Insurance</strong> (ratio 5:3:2): <ul><li>Total units = 5 + 3 + 2 = 10.</li><li>Beans: (5 ÷ 10) × ₦80 = ₦40.</li><li>Rice: (3 ÷ 10) × ₦80 = ₦24.</li><li>Flour: (2 ÷ 10) × ₦80 = ₦16.</li></ul></li></ol>`
  },
  {
    id: 2020,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DIFFERENT ACCOUNTS',
    subtopic: 'Branch Accounts',
    summary_60s: 'Branch accounts is a system of accounting adopted to record the transactions of a small part of a business organization operating with some degree of independence. Business organizations often have a head office in one part of the country with branches in different parts of the c',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Branch Accounts in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Branch accounts is a system of accounting adopted to record the transactions of a small part of a business organization operating with some degree of independence.</p><p>Business organizations often have a head office in one part of the country with branches in different parts of the country.</p><p>The system of accounts employed depends on the nature of trade, location, and degree of control exercised by the head office.</p><h2 style="text-align:center"><strong>Objectives of Branch Accounting</strong></h2><ol><li>To ascertain the profit or loss of each branch separately.</li><li>To evaluate the performance of branch managers.</li><li>To prevent fraud and misappropriation of assets.</li><li>To exercise proper control over branch operations.</li><li>To determine the efficiency of each branch.</li><li>To verify stock at branches.</li></ol><h2 style="text-align:center"><strong>Divisions of Branch Accounting</strong></h2><p>Branch accounting can be classified into two main categories:</p><p>1. Where the Head Office Keeps All the Accounts (Dependent Branch)</p><p>This happens when the branch is fully dependent on the head office. The following accounts are kept:</p><ul><li>Branch Stock Account.</li><li>Goods Sent to Branch Account.</li><li>Branch Stock Adjustment Account.</li><li>Branch Debtors Account (where credit sales are allowed).</li><li>Branch Cash/Bank Account.</li><li>Branch Profit &amp; Loss Account.</li></ul><p>2. Where the Branches Keep Separate Accounts (Semi-Autonomous Branch)</p><p>This occurs when a branch is semi-autonomous. The following accounts show the relationship:</p><ul><li>Branch Current Account in Head Office books.</li><li>Head Office Current Account in Branch books.</li></ul><h2>Pricing Methods</h2><p>Three different pricing methods are used for charging goods to branches:</p><p>1. At Cost Price</p><p>Used when goods are perishable, allowing branch managers to use their discretion to avoid losses.</p><p>2. At Selling Price</p><p>This is a measure of control where the branch must sell goods at the specified selling price.</p><p>3. At Cost Plus a Percentage (Mark-up)</p><p>This helps the head office exercise control over the branch by stating the required percentage profit.</p><p>When using the cost plus percentage method, two accounting approaches can be used:</p><ul><li>Double Column or Memorandum Column Method.</li><li>Branch Adjustment Method.</li></ul><h2>Double Column/Memorandum Method</h2><p>This method combines two accounts in one:</p><ol><li>Branch Stock Account (invoice price column).</li><li>Branch Stock Adjustment Account (cost price column).</li></ol><p>The following items are shown at the same price in both columns:</p><ul><li>Cash sales.</li><li>Credit sales.</li><li>Cash remitted to head office.</li><li>Cash in transit.</li><li>Sundry expenses from takings.</li><li>Sundry expenses paid out of cash.</li><li>Cash stolen.</li></ul><p>Format: Memorandum Branch Stock Account</p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>Invoice Price (₦)</strong></th><th><strong>Cost Price (₦)</strong></th><th><strong>Particulars</strong></th><th><strong>Invoice Price (₦)</strong></th><th><strong>Cost Price (₦)</strong></th></tr></thead><tbody><tr><td>Stock at start</td><td>XX</td><td>XX</td><td>Returns to head office</td><td>XX</td><td>XX</td></tr><tr><td>Goods sent to Branch</td><td>XX</td><td>XX</td><td>Credit sales</td><td>XX</td><td>XX</td></tr><tr><td>Gross profit c/d</td><td>XX</td><td>Cash sales</td><td>XX</td><td>XX</td></tr><tr><td>Allowances off selling price</td><td>XX</td><td>XX</td></tr><tr><td>Goods stolen</td><td>XX</td><td>XX</td></tr><tr><td>Cash stolen</td><td>XX</td><td>XX</td></tr><tr><td>Expenses paid out of takings</td><td>XX</td><td>XX</td></tr><tr><td>Normal loss</td><td>XX</td><td>XX</td></tr><tr><td>Stock at close</td><td>XX</td><td>XX</td></tr><tr><td><strong>Total</strong></td><td><strong>XX</strong></td><td><strong>XX</strong></td><td><strong>Total</strong></td><td><strong>XX</strong></td><td><strong>XX</strong></td></tr></tbody></table><p>Goods Sent to Branch Account (at cost)</p><table border="1"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Returns to head office</td><td>XX</td><td>Branch stock Account</td><td>XX</td></tr><tr><td>Trading Account</td><td>XX</td></tr><tr><td><strong>Total</strong></td><td><strong>XX</strong></td><td><strong>Total</strong></td><td><strong>XX</strong></td></tr></tbody></table><p>Branch Profit &amp; Loss Account</p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Sundry expenses</td><td>XX</td><td>Gross profit (from memo Branch Stock A/C)</td><td>XX</td></tr><tr><td>Stock stolen at cost price</td><td>XX</td></tr><tr><td>Cash stolen</td><td>XX</td></tr><tr><td>Net profit</td><td>XX</td></tr><tr><td><strong>Total</strong></td><td><strong>XX</strong></td><td><strong>Total</strong></td><td><strong>XX</strong></td></tr></tbody></table><h2>Branch Adjustment Method</h2><p>Under this method, the margin is recorded in a separate account called Branch Adjustment Account. The Branch Stock Account and Goods Sent to Branch Account are kept at transfer price, while the profit element (margin) is transferred to the Branch Adjustment Account.</p><p>Format: Branch Stock Account at Selling Price</p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Opening stock</td><td>XX</td><td>Returns to head office</td><td>XX</td></tr><tr><td>Goods sent to branch</td><td>XX</td><td>Goods transferred to other branch</td><td>XX</td></tr><tr><td>Credit sales</td><td>XX</td></tr><tr><td>Cash sales</td><td>XX</td></tr><tr><td>Reduction in selling price</td><td>XX</td></tr><tr><td>Goods stolen</td><td>XX</td></tr><tr><td>Cash stolen</td><td>XX</td></tr><tr><td>Expenses paid out of takings</td><td>XX</td></tr><tr><td>Normal loss</td><td>XX</td></tr><tr><td>Goods in transit</td><td>XX</td></tr><tr><td>Cash in hand</td><td>XX</td></tr><tr><td>Closing stock</td><td>XX</td></tr><tr><td><strong>Total</strong></td><td><strong>XX</strong></td><td><strong>Total</strong></td><td><strong>XX</strong></td></tr></tbody></table><p>Branch Adjustment Account</p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Profit on return to head office</td><td>XX</td><td>Profit on opening stock</td><td>XX</td></tr><tr><td>Profit on return by customer to HQ</td><td>XX</td><td>Profit on goods sent to branch</td><td>XX</td></tr><tr><td>Profit on goods in transit</td><td>XX</td></tr><tr><td>Reduction in selling price</td><td>XX</td></tr><tr><td>Profit on goods stolen</td><td>XX</td></tr><tr><td>Profit on goods transfer to other branch</td><td>XX</td></tr><tr><td>Normal loss (at selling price)</td><td>XX</td></tr><tr><td>Profit on closing stock</td><td>XX</td></tr><tr><td><strong>Total</strong></td><td><strong>XX</strong></td><td><strong>Total</strong></td><td><strong>XX</strong></td></tr></tbody></table><h2 style="text-align:center"><strong>Important Formulas</strong></h2><p>Mark-up and Margin Relationships</p><ul><li>If mark-up is 10%, margin is 9.09%.</li><li>If margin is 30%, mark-up is 42.86%.</li><li>If mark-up is 3/7, margin is 30%.</li></ul><p>Calculating Selling Price from Cost</p><ul><li>Selling Price = Cost Price + (Mark-up percentage × Cost Price).</li></ul><p>Calculating Cost Price from Selling Price</p><ul><li>Cost Price = Selling Price × (100/(100 + Mark-up%)).</li><li>Cost Price = Selling Price × (100 - Margin%)/100.</li></ul><h2 style="text-align:center"><strong>Differences Between Branch Accounts and Departmental Accounts</strong></h2><table border="1" style="width:400px"><thead><tr><th><strong>Branch Accounts</strong></th><th><strong>Departmental Accounts</strong></th></tr></thead><tbody><tr><td>Branches are geographically separated from the main organization</td><td>Departments are attached to the main organization</td></tr><tr><td>Allocation of branch common expenses does not arise</td><td>Allocation of departmental expenses is necessary</td></tr><tr><td>Reconciliation between different branch accounts is required</td><td>Reconciliation of accounts is not necessary</td></tr><tr><td>Branches can be dependent, independent, or foreign</td><td>All departments are under one roof</td></tr><tr><td>Branches are geographically separated</td><td>Departments exist in the same building</td></tr></tbody></table><h2>Illustration 1: Double Column Method</h2><p>Suzi Ltd operates a head office in Lokoja and branch office in Lagos. All goods are purchased by Lokoja and sent to Lagos at cost plus 25%.</p><p>Information for the year ended 31/12/04:</p><ul><li>Credit sales: ₦3,500.</li><li>Goods sent to branch at cost: ₦50,000.</li><li>Returns to head office at cost: ₦500.</li><li>Cash takings remitted to H.O.: ₦10,000.</li><li>Stock at close at cost price: ₦12,500.</li><li>Cash takings stolen: ₦150.</li><li>Sundry expenses paid out of takings: ₦950.</li><li>Goods stolen at cost: ₦40.</li><li>Allowances off selling price: ₦100.</li></ul><p><strong>Solution:</strong></p><p><strong>Step 1: Calculate the Selling Price using the mark-up of 25% on cost</strong></p><ul><li>Selling price of goods sent to branch = ₦50,000 + (25% × ₦50,000) = ₦62,500.</li><li>Selling price of returns to Head office = ₦500 + (25% × ₦500) = ₦625.</li><li>Selling price of stock at close = ₦12,500 + (25% × ₦12,500) = ₦15,625.</li><li>Selling price of goods stolen = ₦40 + (25% × ₦40) = ₦50.</li></ul><p><strong>Step 2: Prepare Branch Stock Account using Memorandum Column</strong></p><p><strong>Memorandum Branch Stock Account</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>Invoice Price (₦)</strong></th><th><strong>Cost Price (₦)</strong></th><th><strong>Particulars</strong></th><th><strong>Invoice Price (₦)</strong></th><th><strong>Cost Price (₦)</strong></th></tr></thead><tbody><tr><td>Goods sent to branch</td><td>62,500</td><td>50,000</td><td>Returns to head office</td><td>625</td><td>500</td></tr><tr><td>Gross profit c/d</td><td>9,140</td><td>Credit sales</td><td>3,500</td><td>3,500</td></tr><tr><td>Cash remitted to H.O.</td><td>10,000</td><td>10,000</td></tr><tr><td>Cash takings stolen</td><td>150</td><td>150</td></tr><tr><td>Sundry expenses</td><td>950</td><td>950</td></tr><tr><td>Goods stolen</td><td>50</td><td>40</td></tr><tr><td>Allowance off selling price</td><td>100</td><td>-</td></tr><tr><td>Stock at close</td><td>15,625</td><td>12,500</td></tr><tr><td><strong>Total</strong></td><td><strong>62,500</strong></td><td><strong>59,140</strong></td><td><strong>Total</strong></td><td><strong>62,500</strong></td><td><strong>59,140</strong></td></tr></tbody></table><p><strong>Goods Sent to Branch Account</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Returns to head office</td><td>500</td><td>Branch stock Account</td><td>50,000</td></tr><tr><td>Trading Account</td><td>49,500</td></tr><tr><td><strong>Total</strong></td><td><strong>50,000</strong></td><td><strong>Total</strong></td><td><strong>50,000</strong></td></tr></tbody></table><p><strong>Profit &amp; Loss Account</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Sundry expenses</td><td>950</td><td>Gross profit b/d</td><td>9,140</td></tr><tr><td>Cash stolen</td><td>150</td></tr><tr><td>Goods stolen at cost</td><td>40</td></tr><tr><td>Net profit</td><td>8,000</td></tr><tr><td><strong>Total</strong></td><td><strong>9,140</strong></td><td><strong>Total</strong></td><td><strong>9,140</strong></td></tr></tbody></table><h2>Illustration 2: Double Column Method</h2><p>POLYALLIED LTD operates a head office in Abuja and has a branch in Akure. The head office buys materials and sends them to the branch at cost price plus 25%.</p><p>Information provided:</p><ul><li>Materials stolen at cost: ₦160.</li><li>Closing stock at cost: ₦50,000.</li><li>Materials sent to branch at cost: ₦200,000.</li><li>Allowance off selling price: ₦400.</li><li>Return to head office at cost: ₦2,000.</li><li>Cash taken/stolen: ₦600.</li><li>Sales on credit: ₦140,000.</li><li>Sundry expenses paid out of takings: ₦3,800.</li><li>Cash remitted to head office: ₦40,000.</li></ul><p><strong>Solution:</strong></p><p><strong>Branch Stock Account with Double/Memorandum Column</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>Cost Price (₦)</strong></th><th><strong>Selling Price (₦)</strong></th><th><strong>Particulars</strong></th><th><strong>Cost Price (₦)</strong></th><th><strong>Selling Price (₦)</strong></th></tr></thead><tbody><tr><td>Materials sent to branch</td><td>200,000</td><td>250,000</td><td>Goods returned to head office</td><td>2,000</td><td>2,500</td></tr><tr><td>Gross profit</td><td>36,500</td><td>Credit sales</td><td>140,000</td><td>140,000</td></tr><tr><td>Off selling price allowance</td><td>-</td><td>400</td></tr><tr><td>Goods stolen</td><td>160</td><td>200</td></tr><tr><td>Cash stolen</td><td>600</td><td>600</td></tr><tr><td>Sundry expenses paid</td><td>3,800</td><td>3,800</td></tr><tr><td>Cash remitted to head office</td><td>40,000</td><td>40,000</td></tr><tr><td>Closing stock</td><td>50,000</td><td>62,500</td></tr><tr><td><strong>Total</strong></td><td><strong>236,500</strong></td><td><strong>250,000</strong></td><td><strong>Total</strong></td><td><strong>236,500</strong></td><td><strong>250,000</strong></td></tr></tbody></table><p><strong>Goods Sent to Branch Office (Cost Price)</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Material returns to head office</td><td>2,000</td><td>Branch stock account</td><td>200,000</td></tr><tr><td>Transfer to head office trading a/c</td><td>198,000</td></tr><tr><td><strong>Total</strong></td><td><strong>200,000</strong></td><td><strong>Total</strong></td><td><strong>200,000</strong></td></tr></tbody></table><p><strong>Profit and Loss Account</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Sundry expenses</td><td>3,800</td><td>Gross profit b/d</td><td>36,500</td></tr><tr><td>Cash stolen</td><td>600</td></tr><tr><td>Goods stolen</td><td>160</td></tr><tr><td>Net profit</td><td>31,940</td></tr><tr><td><strong>Total</strong></td><td><strong>36,500</strong></td><td><strong>Total</strong></td><td><strong>36,500</strong></td></tr></tbody></table><h2>Illustration 3: Branch Adjustment Method</h2><p>KOKOBILO LTD, a manufacturing company in Kano, has a branch in Ibadan. The head office invoices goods at selling price with a mark-up of one-third (1/3) of the selling price.</p><p>Information for year ended December 31, 1995:</p><ul><li>Cash received from debtors: ₦68,624.</li><li>Credit sales: ₦72,000.</li><li>Goods received from head office: ₦180,000.</li><li>Bad debts: ₦596.</li><li>Goods return to head office: ₦1,680.</li><li>Cash discount: ₦1,808.</li><li>Cash sales: ₦100,800.</li></ul><p>Additional information:</p><table border="1" style="width:300px"><thead><tr><th> </th><th style="width:26.5px">1/1/1995</th><th style="width:88.5px">31/12/1995</th></tr></thead><tbody><tr><td>Stock at hand</td><td>₦16,080</td><td>₦21,000</td></tr><tr><td>Debtors</td><td>₦6,608</td><td>₦7,580</td></tr></tbody></table><p><strong>Solution:</strong></p><p><strong>Branch Stock Account</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Opening stock</td><td>16,080</td><td>Goods returned to head office</td><td>1,680</td></tr><tr><td>Goods sent to branch</td><td>180,000</td><td>Credit sales</td><td>72,000</td></tr><tr><td>Cash sales</td><td>100,800</td></tr><tr><td>Closing stock</td><td>21,000</td></tr><tr><td>Deficiency (loss)</td><td>600</td></tr><tr><td><strong>Total</strong></td><td><strong>196,080</strong></td><td><strong>Total</strong></td><td><strong>196,080</strong></td></tr></tbody></table><p><strong>Goods Sent to Branch Account</strong></p><table border="1" style="width:500px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Returns to head office (2/3 × 1,680)</td><td>1,120</td><td>Branch stock account (2/3 × 180,000)</td><td>120,000</td></tr><tr><td>Head office trading a/c</td><td>118,880</td></tr><tr><td><strong>Total</strong></td><td><strong>120,000</strong></td><td><strong>Total</strong></td><td><strong>120,000</strong></td></tr></tbody></table><p><strong>Branch Adjustment Account</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Return to head office (1/3 × 1,680)</td><td>560</td><td>Profit on opening stock (1/3 × 16,080)</td><td>5,360</td></tr><tr><td>Stock at loss</td><td>600</td><td>Profit on goods sent to branch (1/3 × 180,000)</td><td>60,000</td></tr><tr><td>Stock at close bal c/d (1/3 × 21,000)</td><td>7,000</td></tr><tr><td>Profit and loss account</td><td>57,200</td></tr><tr><td><strong>Total</strong></td><td><strong>65,360</strong></td><td><strong>Total</strong></td><td><strong>65,360</strong></td></tr></tbody></table><p><strong>Branch Debtor Account</strong></p><table border="1" style="width:400px"><thead><tr><th><strong>Particulars</strong></th><th><strong>₦</strong></th><th><strong>Particulars</strong></th><th><strong>₦</strong></th></tr></thead><tbody><tr><td>Balance b/f</td><td>6,608</td><td>Cash received</td><td>68,624</td></tr><tr><td>Sales</td><td>72,000</td><td>Discount allowed (cash)</td><td>1,808</td></tr><tr><td>Bad debt</td><td>596</td></tr><tr><td>Debtor at close</td><td>7,580</td></tr><tr><td><strong>Total</strong></td><td><strong>78,608</strong></td><td><strong>Total</strong></td><td><strong>78,608</strong></td></tr></tbody></table>`
  },
  {
    id: 2021,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DIFFERENT ACCOUNTS',
    subtopic: 'Joint Venture Accounts',
    summary_60s: 'A joint venture is when two or more individuals or business entities come together to conduct a specific business for a limited time.It is similar to a partnership, but one party may provide the finance while the other offers technical know-how. Joint ventures are typically tempo',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Joint Venture Accounts in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>A joint venture is when two or more individuals or business entities come together to conduct a specific business for a limited time.It is similar to a partnership, but one party may provide the finance while the other offers technical know-how. Joint ventures are typically temporary and are not registered under a business name.Joint ventures may end after the transaction is completed unless otherwise agreed by the parties. Key features of a joint venture include:</p><ul><li><strong>Profit-Sharing Ratio:</strong> Clearly defined, and profit is determined at the venture's end.</li><li><strong>Capital and Scope:</strong> The venture's capital, scope, and activities are established.</li><li><strong>Agreement:</strong> Activities related to the venture must be agreed upon by all parties.</li><li><strong>Temporary Nature:</strong> The venture ends once completed.</li><li><strong>Participants:</strong> Known as co-venturers.</li><li><strong>Accounting Basis:</strong> Follows the cash basis of accounting.</li><li><strong>No Single Name:</strong> The venture does not need a single name to operate.</li></ul><h2><strong>Preparing Joint Venture Accounts</strong></h2><p>Joint venture accounts do not form part of the double-entry records in any book. They are prepared to ascertain the venture's profit or loss. Important points for preparing joint venture accounts:</p><ol><li><strong>Cash Paid Out:</strong> Debit joint venture account and credit cash account.</li><li><strong>Cash Received:</strong> Credit joint venture account and debit cash account.</li><li><strong>Agreed Charges:</strong> Debit joint venture account and credit the recipient's account (e.g., commission).</li><li><strong>Closing the Venture:</strong> Combine the joint accounts of each venturer into a memorandum joint venture account to ascertain profit or loss.</li><li><strong>Profit:</strong> Debit joint venture account and credit profit and loss account.</li><li><strong>Loss:</strong> Credit joint venture account and debit profit and loss account.</li><li><strong>Balancing Entries:</strong> Remaining balances show the indebtedness of one venture to another.</li></ol><p><strong>ILLUSTRATION </strong>Adeolu and Ngozi decides to enter into joint venture in order ot purchase bails of goods made in Nigeria fabric and resell for a profit. They have agreed that profit or loss will be shared equally. The records from each of the two partners regarding the joint venture is as follows;Adeolu1/9/2003 bought 20 bails of fabric at the rate of <s>N</s>75000 each5/9/2003 Paid bank charges, carriage pass of <s>N</s>14000, transportation <s>N</s>5000025/9/2003 sold 5 bails for <s>N</s>500000030/9/2003 sales boy salaries of <s>N</s>12000Ngozi20/9/2003 sold 15 bails for <s>N</s>400000022/9/2003 paid rent for <s>N</s>32000030/9/2003 sales boy salary of <s>N</s>36000You are required to prepare;</p><ol style="list-style-type:lower-alpha"><li>Adeolu account (book) entries.</li><li>Ngozi account (book) entries.</li><li>Memorandum joint venture account for Adeolu and Ngozi.</li></ol><p><strong>SOLUTION</strong><strong>IN THE BOOK OF ADEOLU</strong><strong>JOINT VENTURE WITH NGOZI ACCOUNT</strong></p><table border="1"><tbody><tr><td><strong>Date</strong></td><td><strong>Particular</strong></td><td><strong>Amount (<s>N</s>)</strong></td><td><strong>Date</strong></td><td><strong>Particular</strong></td><td><strong>Amount (<s>N</s>)</strong></td></tr><tr><td>1/9/03</td><td>Purchase (20*750000)</td><td>1500000</td><td>25/9/03</td><td>Sales</td><td>5000000</td></tr><tr><td>5/9/03</td><td>Bank charges</td><td>14000</td><td>30/9/03</td><td>Balance (Ngozi)</td><td>110000</td></tr><tr><td>Transport</td><td>50000</td></tr><tr><td>30/9/03</td><td>Sales and salaries</td><td>12000</td></tr><tr><td>30/9/03</td><td>Share of profit</td><td>3534000</td></tr><tr><td>5110000</td><td>5110000</td></tr></tbody></table><p><strong>IN THE BOOK OF NGOZI</strong><strong>JOINT VENTURE WITH ADEOLU ACCOUNT</strong></p><table border="1"><tbody><tr><td><strong>Date</strong></td><td><strong>Particular</strong></td><td><strong>Amount (<s>N</s>)</strong></td><td><strong>Date</strong></td><td><strong>Particular</strong></td><td><strong>Amount (<s>N</s>)</strong></td></tr><tr><td>22/9/03</td><td>Rent</td><td>320000</td><td>20/9/03</td><td>Sales</td><td>4000000</td></tr><tr><td>30/9/03</td><td>Sales boy salary</td><td>36000</td></tr><tr><td>30/9/03</td><td>Share of adeolu</td><td>110000</td></tr><tr><td>30/9/03</td><td>Share of profit</td><td>3534000</td></tr><tr><td><strong>4000000</strong></td><td><strong>4000000</strong></td></tr></tbody></table><p><strong>ADEOLU AND NGOZI</strong><strong>MEMORANDUM JOINT VENTURE ACCOUNT</strong></p><table border="1"><tbody><tr><td><strong>Particular</strong></td><td><strong>Amount (<s>N</s>)</strong></td><td><strong>Particular</strong></td><td><strong>Amount (<s>N</s>)</strong></td></tr><tr><td>Rent</td><td>320000</td><td>Sales</td><td>9000000</td></tr><tr><td>Salaries</td><td>48000</td></tr><tr><td>Transportation</td><td>50000</td></tr><tr><td>Bank charges</td><td>14000</td></tr><tr><td>Purchase</td><td>1500000</td></tr><tr><td>Share of profit; Adeolu Ngozi</td><td>3534000 3534000</td></tr><tr><td><strong>9000000</strong></td><td><strong>9000000</strong></td></tr></tbody></table>`
  },
  {
    id: 2022,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DIFFERENT ACCOUNTS',
    subtopic: 'Partnership Accounts',
    summary_60s: 'A partnership is the relationship that exists between two or more persons who carry out a business together with the aim of making a profit.A partnership requires at least two individuals. When forming a partnership, it\'s essential to have a formal agreement to prevent potential ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Partnership Accounts in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>A partnership is the relationship that exists between two or more persons who carry out a business together with the aim of making a profit.A partnership requires at least two individuals. When forming a partnership, it's essential to have a formal agreement to prevent potential conflicts and ensure smooth operations.</p><h1 style="text-align:center"><strong>Partnership Agreement</strong></h1><p>A Partnership Agreement should be documented and typically covers:</p><ul><li>Capital contributed by partners.</li><li>Rate of interest on drawings.</li><li>Rate of interest on capital.</li><li>Profit or loss sharing ratio.</li><li>Partnership salaries, commissions, and other remuneration.</li><li>Basis for valuing goodwill upon death or retirement of partners.</li></ul><p><strong>In the Absence of a Partnership Agreement</strong>If no partnership agreement exists, the following conditions apply:</p><ul><li>No remuneration or salary for partners.</li><li>No interest on capital.</li><li>No interest on drawings.</li><li>Profit and loss shared equally.</li><li>5% interest per annum on any excess capital contributed by a partner beyond the agreed amount.</li></ul><h2 style="text-align:center"><strong>Registration of a Partnership</strong></h2><p>To form a partnership in Nigeria, the following must be submitted to the Corporate Affairs Commission (CAC):</p><ul><li>A copy of the Partnership Agreement.</li><li>A prescribed form signed by all partners containing: <ul><li>Date of commencement of the partnership.</li><li>Address and Post Office Box Number.</li><li>Nature of the business.</li><li>Name of the partnership.</li><li>Business location(s).</li><li>Partners' details (names, addresses, etc.).</li></ul></li></ul><h2 style="text-align:center"><strong>TYPES OF PARTNERS</strong></h2><ol><li><strong>Active Partner</strong>: Participates in the formation and management of the business</li><li><strong>Sleeping Partner</strong>: Contributes capital but does not participate in business management</li><li><strong>Nominal Partner</strong>: Contributes only their name to enhance business reputation</li></ol><p><strong>KEY TERMS IN PARTNERSHIP BUSINESS</strong></p><ul><li><strong>Capital</strong>: Amount contributed by partners to form the business</li><li><strong>Drawings</strong>: Amounts partners withdraw from the business periodically</li><li><strong>Salary</strong>: Compensation paid to active partners for their participation in business operations</li><li><strong>Interest on Drawings</strong>: Interest charged on amounts withdrawn by partners</li><li><strong>Interest on Capital</strong>: Interest paid on partners' capital contributions</li><li><strong>Appropriation Account</strong>: Account showing distribution of profits or losses according to profit-sharing ratio</li><li><strong>Capital Account</strong>: Record of capital contributed by each partner</li><li><strong>Current Account</strong>: Record of interest on drawings, capital, profit shares, and salaries for each partner</li></ul><h2>ACCOUNTS MAINTAINED IN A PARTNERSHIP</h2><ol><li>Trading Profit and Loss Account.</li><li>Appropriation Account.</li><li>Current Account.</li><li>Capital Account.</li><li>Balance Sheet.</li></ol><h2 style="text-align:center"><strong>FORMAT OF PARTNERSHIP ACCOUNTS</strong></h2><p>APPROPRIATION ACCOUNT</p><table border="1" style="width:400px"><thead><tr><th>Debit Side (Dr.)</th><th>Amount (₦)</th><th>Credit Side (Cr.)</th><th>Amount (₦)</th></tr></thead><tbody><tr><td>Partner Salary</td><td>XX</td><td>Net Profit b/d</td><td>XX</td></tr><tr><td>Partner Commission</td><td>XX</td><td>Interest on Drawings</td><td>XX</td></tr><tr><td>Interest on Capital</td><td>XX</td></tr><tr><td>Share of Profit</td><td>XX</td></tr><tr><td>Total</td><td>XX</td><td>Total</td><td>XX</td></tr></tbody></table><p>CAPITAL ACCOUNT</p><table border="1" style="width:400px"><thead><tr><th>Dr. Side</th><th>Partner A (₦)</th><th>Partner B (₦)</th><th>Cr. Side</th><th>Partner A (₦)</th><th>Partner B (₦)</th></tr></thead><tbody><tr><td>Balance c/d</td><td>XX</td><td>XX</td><td>Capital Contributed</td><td>XX</td><td>XX</td></tr></tbody></table><p>CURRENT ACCOUNT</p><table border="1" style="width:400px"><thead><tr><th>Dr. Side</th><th>Partner A (₦)</th><th>Partner B (₦)</th><th>Cr. Side</th><th>Partner A (₦)</th><th>Partner B (₦)</th></tr></thead><tbody><tr><td>Drawings</td><td>XX</td><td>XX</td><td>Bal b/d</td><td>XX</td><td>XX</td></tr><tr><td>Interest on Drawings</td><td>XX</td><td>XX</td><td>Interest on Capital</td><td>XX</td><td>XX</td></tr><tr><td>Balance c/d</td><td>XX</td><td>XX</td><td>Share of Profit</td><td>XX</td><td>XX</td></tr><tr><td>Salaries</td><td>XX</td><td>XX</td></tr></tbody></table><p>GOODWILLGoodwill is the intangible value arising from a business’s reputation, customer loyalty, and advantageous market position. <strong>Causes of Goodwill:</strong></p><ul><li>Reputation.</li><li>Location advantage.</li><li>Quality of goods/services.</li><li>Managerial expertise.</li></ul><p><strong>Reasons for Valuing Goodwill:</strong></p><ul><li>Admission or retirement of a partner.</li><li>Death of a partner.</li><li>Change in profit-sharing ratio.</li></ul><p><strong>Accounting Treatment of Goodwill:</strong></p><ul><li><strong>Goodwill retained in books:</strong> Debit Goodwill account; Credit Partners' Capital accounts in old ratio.</li><li><strong>Goodwill written off:</strong> Debit Partners' Capital accounts in the new ratio; Credit Goodwill account.</li></ul><h2 style="text-align:center"><strong>DISSOLUTION OF PARTNERSHIP</strong></h2><p>Partnership dissolution occurs due to:</p><ul><li>Death or retirement.</li><li>Bankruptcy or insolvency.</li><li>Mutual consent.</li></ul><p><strong>Accounts prepared during dissolution:</strong></p><ul><li>Realization Account.</li><li>Cash Book.</li><li>Partners’ Capital Accounts.</li></ul><p>REALIZATION ACCOUNT</p><table border="1"><thead><tr><th>Debit (₦)</th><th>Credit (₦)</th></tr></thead><tbody><tr><td>Assets (Book Value)</td><td>Cash received from assets</td></tr><tr><td>Expenses on Realization</td><td>Liabilities taken over</td></tr><tr><td>Share of profit (if any)</td></tr></tbody></table><p><strong>REVALUATION OF PARTNERSHIP ASSETS</strong>Revaluation occurs when assets/liabilities are adjusted to reflect market values upon admission or retirement of partners.</p><table border="2" style="width:400px"><thead><tr><th>Transaction</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Increase in asset value</td><td>Asset account</td><td>Revaluation account</td></tr><tr><td>Decrease in asset value</td><td>Revaluation account</td><td>Asset account</td></tr><tr><td>Increase in liabilities</td><td>Revaluation account</td><td>Liabilities account</td></tr><tr><td>Decrease in liabilities</td><td>Liabilities account</td><td>Revaluation account</td></tr><tr><td>Transfer profit to capital account</td><td>Revaluation account</td><td>Capital account</td></tr><tr><td>Transfer loss to capital account</td><td>Capital account</td><td>Revaluation account</td></tr></tbody></table><p><strong>CONVERSION TO LIMITED COMPANY</strong>A partnership may convert into a limited liability company, dissolving the partnership in the process. Considerations include:</p><ul><li>Purchase consideration settled via cash, shares, or debentures.</li><li>Closure of partners’ capital accounts.</li></ul>`
  },
  {
    id: 2023,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'DIFFERENT ACCOUNTS',
    subtopic: 'Company Accounts',
    summary_60s: 'TOPICS: Formation and classification of companies. Issue of shares and debentures. Final accounts of companies. Interpretation of accounts using ratios. Distinction between capital and revenue reserves. A Company is a business owned, managed, controlled and financed by an associa',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Company Accounts in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>TOPICS:</strong></p><ul><li>Formation and classification of companies.</li><li>Issue of shares and debentures.</li><li>Final accounts of companies.</li><li>Interpretation of accounts using ratios.</li><li>Distinction between capital and revenue reserves.</li></ul><p>A Company is a business owned, managed, controlled and financed by an association of people who possess legal entity with the usual motive of maximizing owners’ wealth.</p><h1 style="text-align:center"><strong>Types of Companies</strong></h1><ol><li><strong>Unlimited Companies:</strong> Members' liability is unlimited, meaning their private assets can be sold to pay company debts.</li><li><strong>Companies Limited by Shares:</strong> Members' liability is limited to their investment, protecting private assets in case of insolvency.</li><li><strong>Companies Limited by Guarantee:</strong> Members' liability is limited to a guaranteed amount during liquidation, such as clubs.</li></ol><p><strong>Limited Liability Companies</strong> have characteristics like limited liability, perpetual existence, and legal entity status. They can be:</p><ul><li><strong>Private Companies:</strong> Restricted membership and share transfer; names end with LTD.</li><li><strong>Public Companies:</strong> Few restrictions on membership and share transfer; names end with PLC.</li></ul><h2 style="text-align:center"><strong>Formation of a Company</strong></h2><p>There are four major steps:</p><ol><li><strong>Get Promoters:</strong> Individuals who conceive the company idea and meet legal requirements.</li><li><strong>Prepare Documents:</strong> Memorandum of Association, Articles of Association, and Statement of National Capital.</li><li><strong>File Documents:</strong> Signed, stamped, and logged with the registrar of companies for verification.</li><li><strong>Receive Certificate:</strong> Registrar issues the certificate of incorporation.</li></ol><h2 style="text-align:center"><strong>Memorandum of Association</strong></h2><p>This document contains the external rules of the company and includes:</p><ul><li>Registered office.</li><li>Authorized capital.</li><li>Object of the company.</li><li>Company name (ending with LTD).</li></ul><h2 style="text-align:center"><strong>Articles of Association</strong></h2><p>This document contains internal regulations and includes:</p><ul><li>Duties and powers of directors.</li><li>Rights and responsibilities of shareholders.</li><li>Appointment of directors.</li><li>Procedures for accounting and auditing.</li></ul><h2 style="text-align:center"><strong>Raising Funds</strong></h2><p>Companies raise funds by issuing shares in three ways:</p><ul><li><strong>At a Discount:</strong> Shares are sold below nominal value (e.g., ₦2 shares issued at ₦1).</li><li><strong>At a Premium:</strong> Shares are sold above nominal value, with the premium regarded as capital reserve (e.g., ₦2 shares issued at ₦4).</li><li><strong>At Par:</strong> Shares are sold at nominal value (e.g., ₦2 shares issued at ₦2).</li></ul><p><strong>FINAL ACCOUNT OF A COMPANY </strong>The following accounts are prepared at the end of the year;</p><ol style="list-style-type:lower-alpha"><li>Trading, profit and loss.</li><li>Appropriation account.</li><li>Balance sheet.</li></ol><p><strong>FORMAT OF THE TRADING PROFIT AND LOSS ACCOUNT</strong></p><table border="1" style="width:401px"><thead><tr><th style="width:256px"><strong>Particulars</strong></th><th style="width:76px"><strong>N</strong></th><th style="width:46px"><strong>N</strong></th></tr></thead><tbody><tr><td><strong>Sales</strong></td><td>XX</td></tr><tr><td>Less: Return inward</td><td>(XX)</td><td>XX</td></tr><tr><td><strong>Net sales</strong></td><td>XX</td></tr><tr><td><strong>Cost of goods sold</strong></td></tr><tr><td>Opening inventory</td><td>XX</td></tr><tr><td>Add: Purchase</td><td>XX</td></tr><tr><td>Carriage inward</td><td>XX</td></tr><tr><td>Less: Return outward</td><td>(XX)</td></tr><tr><td><strong>Cost of goods available for sale</strong></td><td>XX</td></tr><tr><td>Less: Closing stock</td><td>(XX)</td><td>(XX)</td></tr><tr><td><strong>GROSS PROFIT/LOSS</strong></td><td>XX</td></tr><tr><td><strong>GROSS PROFIT b/d</strong></td><td>XX</td></tr><tr><td>Add: Discount received</td><td>XX</td></tr><tr><td>Income from quoted investments</td><td>XX</td></tr><tr><td>Commission received</td><td>XX</td></tr><tr><td>Decrease in provision for bad debt</td><td>XX</td></tr><tr><td>Profit on sales of fixed asset</td><td>XX</td></tr><tr><td>Recovery of bad debt</td><td>XX</td></tr><tr><td>(Any other income/gain received)</td><td>XX</td></tr><tr><td><strong>Total Other Income</strong></td><td>XX</td></tr><tr><td><strong>EXPENSES</strong></td></tr><tr><td>Wages and salaries</td><td>XX</td></tr><tr><td>Telephone</td><td>XX</td></tr><tr><td>Advertising</td><td>XX</td></tr><tr><td>Lighting</td><td>XX</td></tr><tr><td>Rent and rates</td><td>XX</td></tr><tr><td>Insurance</td><td>XX</td></tr><tr><td>Bank charges</td><td>XX</td></tr><tr><td>Discount allowed</td><td>XX</td></tr><tr><td>General expenses</td><td>XX</td></tr><tr><td>Debenture interest</td><td>XX</td></tr><tr><td>Director’s remuneration</td><td>XX</td></tr><tr><td>Auditor’s remuneration</td><td>XX</td></tr><tr><td>Hire of plant</td><td>XX</td></tr><tr><td>Bad debts</td><td>XX</td></tr><tr><td>Interest on loan</td><td>XX</td></tr><tr><td>Increase in provision for bad debt</td><td>XX</td></tr><tr><td>Provision for bad debt</td><td>XX</td></tr><tr><td>Depreciation of fixed assets</td><td>XX</td><td>(XX)</td></tr><tr><td><strong>Net profit before tax</strong></td><td>XX</td></tr><tr><td><strong>Tax</strong></td><td>(XX)</td></tr><tr><td><strong>Net profit after tax</strong></td><td>XX</td></tr></tbody></table><p><strong>APPROPRIATION ACCOUNT</strong></p><table border="1"><tbody><tr><td><s>N</s></td><td><s>N</s></td><td><s>N</s></td></tr><tr><td>Corporation tax General reserveRevenue reserveDividend interimProposed dividendGoodwill written offPreliminary expense written offRetained profit carried forward</td><td>XX XXXXXXXXXXXXXX</td><td>Bal b/f from last year Net profit b/d</td><td>XX XX</td></tr><tr><td><strong>XX</strong></td><td><strong>XX</strong></td></tr></tbody></table><p><strong>FORMAT OF BALANCE SHEET</strong></p><table border="1" style="width:339px"><thead><tr><th style="width:195px"><strong>Particulars</strong></th><th style="width:57px"><strong>Cost</strong></th><th style="width:49px"><strong>Depreciation</strong></th><th style="width:40px"><strong>NBV</strong></th></tr></thead><tbody><tr><td><strong>ASSETS</strong></td></tr><tr><td><strong>Non-current assets</strong></td></tr><tr><td>Land and building</td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td>Motor van</td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td>Furniture and fitting</td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td>Plant and machinery</td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td>Freehold premises</td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td><strong>Total Non-current assets</strong></td><td>XX</td><td>XX</td><td>XX</td></tr><tr><td><strong>Investments</strong></td></tr><tr><td>Quoted at cost</td><td>XX</td></tr><tr><td>Unquoted at cost</td><td>XX</td><td>XX</td></tr><tr><td><strong>Current assets</strong></td></tr><tr><td>Closing inventory</td><td>XX</td></tr><tr><td>Cash at bank</td><td>XX</td></tr><tr><td>Cash in hand</td><td>XX</td></tr><tr><td>Bill receivable</td><td>XX</td></tr><tr><td>Payment in arrears</td><td>XX</td></tr><tr><td>Prepayment</td><td>XX</td></tr><tr><td>Interest in deposit</td><td>XX</td></tr><tr><td>Debtors</td><td>XX</td></tr><tr><td>Less: bad debts</td><td>(XX)</td><td>(XX)</td><td>(XX)</td></tr><tr><td><strong>Total Current Assets</strong></td><td>XX</td></tr><tr><td><strong>TOTAL ASSETS</strong></td><td>XX</td></tr></tbody></table><table border="1" style="width:341px"><tbody><tr><td><strong>EQUITY AND LIABILITIES</strong></td></tr><tr><td><strong>Equity</strong></td></tr><tr><td><strong>Authorized capital</strong></td></tr><tr><td>Ordinary share at N1 each</td><td>XX</td></tr><tr><td>10% preference share at N1 each</td><td>XX</td></tr><tr><td><strong>Total Authorized Capital</strong></td><td>XX</td></tr><tr><td><strong>Issued share capital</strong></td></tr><tr><td>Ordinary share at N1 each</td><td>XX</td></tr><tr><td>10% preference at N1 each</td><td>XX</td></tr><tr><td><strong>Total Issued Share Capital</strong></td><td>XX</td></tr><tr><td><strong>Reserves</strong></td></tr><tr><td>Share premium</td><td>XX</td></tr><tr><td>General reserve</td><td>XX</td></tr><tr><td>Retained profit</td><td>XX</td></tr><tr><td>Capital redemption reserve</td><td>XX</td><td>XX</td></tr><tr><td><strong>Total Reserves</strong></td><td>XX</td></tr><tr><td><strong>Non-current liabilities</strong></td></tr><tr><td>10% Debentures</td><td>XX</td></tr><tr><td><strong>Current Liabilities</strong></td></tr><tr><td>Creditors</td><td>XX</td></tr><tr><td>Overdraft</td><td>XX</td></tr><tr><td>Accrued expenses</td><td>XX</td></tr><tr><td>Proposed dividend</td><td>XX</td></tr><tr><td>Corporation tax</td><td>XX</td></tr><tr><td>Bill payable</td><td>XX</td></tr><tr><td>Loan</td><td>XX</td><td>XX</td></tr><tr><td><strong>Total Current Liabilities</strong></td><td>XX</td></tr><tr><td><strong>TOTAL EQUITY AND LIABILITIES</strong></td><td>XX</td></tr></tbody></table><p><strong>ILLUSTRATION</strong>The following were extracted from the books of Ibekwe Nigeria ltd and are shown in the trial balance as at 31<sup>st</sup> December 2003</p><table border="1"><tbody><tr><td><strong>PARTICULAR</strong></td><td><strong>DR</strong></td><td><strong>CR</strong></td></tr><tr><td>Issued and fully paid 20000 ordinary shares of N1 each</td><td>20000</td></tr><tr><td>Share premium</td><td>10000</td></tr><tr><td>General reserve</td><td>8000</td></tr><tr><td>Profit and loss account</td><td>3000</td></tr><tr><td>Purchase</td><td>45000</td></tr><tr><td>Cash at bank</td><td>38760</td></tr><tr><td>Discounts</td><td>200</td><td>400</td></tr><tr><td>Sales</td><td>91740</td></tr><tr><td>Opening inventory</td><td>8000</td></tr><tr><td>Carriage outwards</td><td>560</td></tr><tr><td>Loans</td><td>24000</td></tr><tr><td>Interest on loans</td><td>1000</td></tr><tr><td>Provision for bad and doubtful debts</td><td>2000</td></tr><tr><td>Preliminary expenses</td><td>12000</td></tr><tr><td>Returns</td><td>240</td><td>260</td></tr><tr><td>Carriage inwards</td><td>160</td></tr><tr><td>Salaries and wages</td><td>5000</td></tr><tr><td>Motor expenses</td><td>1800</td></tr><tr><td>Director’s salaries</td><td>6000</td></tr><tr><td>Repair to premises</td><td>250</td></tr><tr><td>Rate</td><td>1600</td></tr><tr><td>Premises at cost</td><td>20000</td></tr><tr><td>Motor vehicle at cost</td><td>23000</td></tr><tr><td>Plant and machinery at cost</td><td>25000</td></tr><tr><td>Provision for depreciation; Plant and machinery;</td><td>2500</td></tr><tr><td>Sundry expenses</td><td>3500</td></tr><tr><td>Cash in hand</td><td>300</td></tr><tr><td>Creditors</td><td>8000</td></tr><tr><td>Debtors</td><td>12390</td></tr><tr><td>Cash at bank</td><td>4000</td></tr><tr><td><strong>TOTAL</strong></td><td><strong>170000</strong></td><td><strong>170000</strong></td></tr></tbody></table><p><strong>ADDITIONAL INFORMATION</strong>a. Closing inventory at 31<sup>st</sup> December was N12500b. Expenses unpaid:Motor expenses N200Insurance N450Sundry expenses N400c. Prepaid expenses;Rates N320Sundry expenses N250d. Provision for bad debts to be increased to N2800e. Part of the premises is sublet at N2400 per annumf. Monthly salaries and wages bill N400g. Bad debts at 31<sup>st</sup> December N600h. Loan interest is 5% per annumi. Provide for depreciation on a straight-line methodPremises 2%Plant and machinery 25%Motor vehicle 10%j. Write off preliminary expensesk. Transfer to general reserves N5000 and N5000 to revenue reserveYou are required to prepare Ibekwe Nigeria ltd;(a) trading profit and loss appropriation account for the year ended 31<sup>st</sup> December 2003 and(b) Balance sheet as at that date<strong>Solution </strong><strong>IBEKWE NIGERIA LTD</strong><strong>TRADING PROFIT AND LOSS ACCOUNT AS AT YEAR ENDED 31<sup>ST</sup> DECEMBER</strong> 2003</p><table border="1" style="width:404px"><thead><tr><th style="width:193px"><strong>Particulars</strong></th><th style="width:117px"><strong>N</strong></th><th style="width:72px"><strong>N</strong></th><th style="width:55px"><strong>N</strong></th></tr></thead><tbody><tr><td><strong>Sales</strong></td><td>91,740</td></tr><tr><td>Less: Return inward</td><td>(240)</td><td>91,500</td></tr><tr><td><strong>Net Sales</strong></td><td>91,500</td></tr><tr><td><strong>Cost of Goods Sold</strong></td></tr><tr><td>Opening inventory</td><td>8,000</td></tr><tr><td>Add: Purchase</td><td>45,000</td></tr><tr><td>Carriage inward</td><td>160</td></tr><tr><td>Total Purchases</td><td>45,160</td></tr><tr><td>Less: Return outward</td><td>(360)</td></tr><tr><td><strong>Cost of Goods Available for Sale</strong></td><td>52,800</td></tr><tr><td>Less: Closing stock</td><td>(12,500)</td></tr><tr><td><strong>Cost of Goods Sold</strong></td><td>40,300</td></tr><tr><td><strong>GROSS PROFIT/LOSS</strong></td><td>51,200</td></tr><tr><td><strong>GROSS PROFIT b/d</strong></td><td>51,200</td></tr><tr><td>Add: Discount received</td><td>400</td></tr><tr><td>Rental income</td><td>2,400</td></tr><tr><td><strong>Total Other Income</strong></td><td>2,800</td></tr><tr><td><strong>Total Income</strong></td><td>54,000</td></tr><tr><td><strong>EXPENSES</strong></td></tr><tr><td>Wages and salaries</td><td>4,800</td></tr><tr><td>Carriage outward</td><td>560</td></tr><tr><td>Motor vehicle expenses</td><td>2,000</td></tr><tr><td>Director’s salaries</td><td>6,000</td></tr><tr><td>Repair to premises</td><td>250</td></tr><tr><td>Rates</td><td>1,280</td></tr><tr><td>Insurance</td><td>450</td></tr><tr><td>Discount allowed</td><td>200</td></tr><tr><td>Provision for depreciation:</td></tr><tr><td>Premises (2% x 20,000)</td><td>400</td></tr><tr><td>Plant and machinery (25% x 25,000)</td><td>6,250</td></tr><tr><td>Motor vehicles (10% x 23,000)</td><td>2,300</td></tr><tr><td>Sundry expenses</td><td>3,650</td></tr><tr><td>Bad debts</td><td>600</td></tr><tr><td>Interest on loan</td><td>1,200</td></tr><tr><td>Provision for bad debt</td><td>800</td></tr><tr><td><strong>Total Expenses</strong></td><td>30,740</td></tr><tr><td><strong>Net Profit Before Tax</strong></td><td>23,260</td></tr><tr><td>Add: Retained profit from last year</td><td>3,000</td></tr><tr><td><strong>Total Profit</strong></td><td>26,260</td></tr><tr><td>Less: Appropriations</td></tr><tr><td>General reserve</td><td>5,000</td></tr><tr><td>Revenue reserve</td><td>5,000</td></tr><tr><td>Preliminary expenses written off</td><td>12,000</td></tr><tr><td><strong>Total Appropriations</strong></td><td>22,000</td></tr><tr><td><strong>Retained Profit Carried Forward</strong></td><td>4,260</td></tr></tbody></table><p><strong>IBEKWE NIGERIA LTD</strong><strong>BALANCE SHEET AS AT 31<sup>ST</sup> DECEMBER 2003</strong></p><table border="1" style="width:400px"><thead><tr><th style="width:219px"><strong>ASSETS</strong></th><th style="width:82px"><strong>Cost</strong></th><th style="width:65px"><strong>Depreciation</strong></th><th style="width:60px"><strong>NBV</strong></th></tr></thead><tbody><tr><td><strong>Non-Current Assets</strong></td></tr><tr><td>Motor van</td><td>23,000</td><td>2,300</td><td>20,700</td></tr><tr><td>Plant and machinery</td><td>25,000</td><td>8,750</td><td>16,250</td></tr><tr><td>Freehold premises</td><td>20,000</td><td>400</td><td>19,600</td></tr><tr><td><strong>Total Non-Current Assets</strong></td><td>68,000</td><td>11,450</td><td>56,550</td></tr><tr><td><strong>Current Assets</strong></td></tr><tr><td>Closing inventory</td><td>12,500</td></tr><tr><td>Cash at bank</td><td>4,000</td></tr><tr><td>Cash in hand</td><td>300</td></tr><tr><td>Rent receivable</td><td>2,400</td></tr><tr><td>Prepayment (Rates)</td><td>320</td></tr><tr><td>Prepayment (Sundry expenses)</td><td>250</td></tr><tr><td>Prepayment (Wages and salaries)</td><td>200</td></tr><tr><td>Debtors</td><td>12,390</td><td>12,390</td></tr><tr><td>Less: Provision for bad debt</td><td>(3,400)</td><td>(3,400)</td></tr><tr><td><strong>Net Debtors</strong></td><td>8,990</td></tr><tr><td><strong>Total Current Assets</strong></td><td>28,960</td></tr><tr><td><strong>TOTAL ASSETS</strong></td><td>85,510</td></tr></tbody></table><table border="1" style="width:400px"><thead><tr><th style="width:230px"><strong>EQUITY AND LIABILITIES</strong></th><th style="width:76px"> </th><th style="width:48px"> </th><th style="width:53px"> </th></tr></thead><tbody><tr><td><strong>Financed By</strong></td></tr><tr><td><strong>Authorized Capital</strong></td></tr><tr><td>Ordinary shares at N1 each</td><td>20,000</td><td>20,000</td></tr><tr><td><strong>Issued Share Capital</strong></td><td>20,000</td><td>20,000</td></tr><tr><td><strong>Reserves</strong></td></tr><tr><td>Share premium</td><td>10,000</td><td>10,000</td></tr><tr><td>General reserve</td><td>13,000</td><td>13,000</td></tr><tr><td>Retained profit</td><td>4,460</td><td>4,460</td></tr><tr><td>Revenue reserve</td><td>10,000</td><td>10,000</td></tr><tr><td><strong>Total Reserves</strong></td><td>32,260</td></tr><tr><td><strong>Loan Capital</strong></td></tr><tr><td>Loans</td><td>24,000</td></tr><tr><td><strong>Current Liabilities</strong></td></tr><tr><td>Creditors</td><td>8,000</td></tr><tr><td>Accrued sundry expenses</td><td>400</td></tr><tr><td>Loan interest owing</td><td>200</td></tr><tr><td>Motor expenses owing</td><td>200</td></tr><tr><td>Insurance accrued</td><td>450</td></tr><tr><td><strong>Total Current Liabilities</strong></td><td>9,250</td></tr><tr><td><strong>TOTAL EQUITY AND LIABILITIES</strong></td><td>85,510</td></tr></tbody></table><p>Workings for <strong> Ibekwe Nigeria Ltd</strong> as at 31st December 2003<strong>1. Salaries and Wages:</strong>The prepayment of wages amounts to N200, since the amount paid is N5,000 and the due amount is N4,800 for the year.</p><ul><li><strong>Amount paid:</strong> 5,000</li><li><strong>Amount due</strong>: 400 × 12 = 4,800</li><li><strong>Prepayment:</strong> 200</li></ul><p><strong>2. Interest on Loans:</strong>The company owed interest of N1,200, but only N1,000 was paid, leaving N200 as outstanding.</p><ul><li><strong>Amount due for payment</strong>: 5% × 24,000 = 1,200</li><li><strong>Amount paid</strong>: 1,000</li><li><strong>Amount owing</strong>: 200</li></ul><p><strong>3. Provision for Bad Debt:</strong>The increase in the provision for bad debts for the period is N800, which has been added to the profit and loss account.</p><ul><li><strong>New provision</strong>: 2,800</li><li><strong>Old provision</strong>: 2,000</li><li><strong>Increase in provision to P&amp;L</strong> : 2,800 − 2,000 = 800</li></ul><p><strong>4. Motor Vehicle Expenses:</strong>The total motor vehicle expenses amounted to N2,000 (N1,800 paid and N200 owing).</p><ul><li><strong>Amount paid</strong>: 1,800</li><li><strong>Amount owing</strong>: 200</li></ul><p><strong>5. Rates:</strong>The company paid N1,600 for rates, but N320 was prepaid, leaving N1,280 as the expense for the year.</p><ul><li><strong>Amount paid</strong>: 1,600</li><li><strong>Amount prepaid</strong>: 320</li></ul><p><strong>6. Depreciation:</strong>The total depreciation for the year for plant and machinery was calculated as N6,250 for the new provision, with an existing provision of N2,500, totaling N8,750.</p><ul><li><strong>Plant and machinery</strong>: 25% × 25,000 = 6,250</li><li><strong>New provision to profit and loss</strong>: 6,250</li><li><strong>Old provision</strong>: 2,500</li><li><strong>Total depreciation for the period</strong>: 6,250 + 2,500 = 8,750</li></ul><p><strong>7. Sundry Expenses:</strong>The sundry expenses incurred during the year are N3,650 after deducting prepaid expenses of N250.</p><ul><li><strong>Amount owed</strong>: 3,500</li><li><strong>Amount owing</strong>: 400</li><li><strong>Prepaid</strong>: 250</li><li><strong>Amount to P&amp;L</strong> : 3,650</li></ul><p><strong>8. General Reserve:</strong><strong>Explanation:</strong> The company made a transfer to the general reserve, reducing the reserve balance from N8,000 to N5,000 for the year.</p><ul><li><strong>Old reserve</strong>: 8,000</li><li><strong>New reserve</strong>: 5,000</li></ul><h2 style="text-align:center"><strong>ACCOUNTING RATIOS</strong></h2><p>As known in mathematics, ratios show the relationship between two figures but accounting ratios help in interpreting the financial statements as well as comparing various items in the final account with one another.Accounting ratios are classified under the the following headings;</p><ol start="1" style="list-style-type:upper-alpha"><li>Profitability ratio.</li><li>Liquidity ratio.</li><li>Investment ratio.</li></ol><p><strong>A. PROFITABILITY RATIO</strong>Profitability ratios measure the profit earned during a period relative to capital employed at the end of the year. They assess the effectiveness of management. <strong>1. Gross profit percentage:</strong>This ratio shows the relationship between gross profit and sales. Changes occur in this ratio when there are changes in the selling price, volume of output, or stock valuation methods.<span class="mathjax-latex">\\(\\text{Gross Profit Percentage}=\\frac{\\text{Gross Profit} \\times 100}{\\text{Sales}}\\)</span><strong>2. Net profit percentage:</strong>This ratio indicates whether the expenses of running the business are in proportion to the sales revenue.<span class="mathjax-latex">\\(\\text{Net Profit Percentage}=\\frac{\\text{Net Profit} \\times 100}{\\text{Sales}}\\)</span><strong>3. Return on capital employed: </strong>This measures the efficiency of the management in utilizing the assets of the business<span class="mathjax-latex">\\(\\text{ROCE}=\\frac{\\text{Net Profit (before interest and tax)} \\times 100}{\\text{Capital Employed}}\\)</span><strong>5. Turnover ratio: </strong>This ratio shows how efficiently the company uses its assets to generate sales.<span class="mathjax-latex">\\(\\text{Asset Turnover Ratio}=\\frac{\\text{Sales}}{\\text{Capital Employed}}\\)</span><strong>B. LIQUIDITY RATIO</strong>These ratios measure the ability of the business to meet its short-term obligations. They indicate the strength of working capital and the degree of solvency of the business. <strong>1. Current Ratio</strong>: This ratio indicates the extent to which the business can meet its short-term obligations with its current assets. <strong>Formula</strong>:<span class="mathjax-latex">\\(\\text{Current Ratio}=\\frac{\\text{Current Assets}}{\\text{Current Liabilities}}\\)</span><strong>2. Acid-Test Ratio (Quick Ratio)</strong> : This ratio measures the ability of the business to meet its short-term obligations without relying on inventory (stock). <strong>Formula</strong>:<span class="mathjax-latex">\\(\\text{Acid-Test Ratio}=\\frac{\\text{Current Assets}-\\text{Stock}}{\\text{Current Liabilities}}\\)</span><strong>3. Rate of Stock Turnover</strong>: This ratio shows how many times the stock is turned over (sold and replaced) during a period. <strong>Formula</strong>:<span class="mathjax-latex">\\(\\text{Stock Turnover Ratio}=\\frac{\\text{Cost of Goods Sold}}{\\text{Average Stock}}\\)</span><strong>4. Debtor Ratio (Receivables Turnover)</strong> : This ratio shows the average time it takes for a company to collect its receivables (debts from customers). <strong>Formula</strong>:<span class="mathjax-latex">\\(\\text{Debtor Days}=\\frac{\\text{Debtors} \\times 365}{\\text{Credit Sales}}\\)</span><strong>C. INVESTMENT RATIO</strong>This is used by investors to evaluate the share of quoted companies as potential investment;These ratios are used by investors to evaluate the attractiveness of a company's shares as potential investments. <strong>Price-Earnings (P/E) Ratio</strong>: This ratio shows the market price of a share in relation to the company’s earnings per share (EPS). A high P/E ratio typically indicates that investors expect future growth in earnings. <strong>Formula</strong>:<span class="mathjax-latex">\\(\\text{Price-Earnings Ratio}=\\frac{\\text{Market Price per Share}}{\\text{Earnings per Share (EPS)}}\\)</span><strong>2. Dividend Yield</strong>: This ratio indicates the annual dividend income from an ordinary share as a percentage of its market price. <strong>Formula</strong>:<span class="mathjax-latex">\\(\\text{Dividend Yield}=\\frac{\\text{Dividend per Share} \\times 100}{\\text{Market Price per Share}}\\)</span><strong>3. Dividend Cover</strong>: This ratio shows the extent to which a company's earnings can cover its dividend payments. A higher ratio means the company is retaining more of its profits to reinvest in the business. <strong>Formula</strong>:<span class="mathjax-latex">\\(\\text{Dividend Cover}=\\frac{\\text{Profit after Tax}}{\\text{Total Dividends}}\\)</span><strong>DIFFERENCES BETWEEN CAPITAL AND REVENUE RESERVES</strong>Capital reserve is the amount set aside from profits which are not available for distribution as dividends.Examples include:</p><ol style="list-style-type:lower-alpha"><li>Capital redemption fund.</li><li>Surplus on revaluation of asset.</li><li>Profit on redemption of debentures.</li><li>Excess of net assets over purchase consideration.</li><li>Premium on shares and debentures\\.</li></ol><p>Revenue reserves on the other hand are reserves which are available for distribution as dividends.Revenue reserve is divided into general reserve (they are set apart to strengthen the financial position of the business) and specific reserve (as the name implies, they are set aside for a specific purpose).</p>`
  },
  {
    id: 2024,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'PUBLIC SECTOR ACCOUNTING',
    subtopic: 'Cash And Accrual Basis',
    summary_60s: 'Time is money, as the saying goes. But how do you measure it in accounting? "Cash" counts what\'s in your pocket now, while "Accrual" sees the future value of deals in the making. Cash and Accrual Basis of Accounting Cash Basis of Accounting: Recognizes only revenue received and e',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Cash And Accrual Basis in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Time is money, as the saying goes. But how do you measure it in accounting? "Cash" counts what's in your pocket now, while "Accrual" sees the future value of deals in the making.</p><h2 style="text-align:center"><strong>Cash and Accrual Basis of Accounting</strong></h2><p><strong>Cash Basis of Accounting:</strong></p><ul><li>Recognizes only revenue received and expenses paid in cash during an accounting period.</li><li>Commonly used in the public sector (except corporations and parastatals).</li><li>Focuses on cash generation and utilization.</li><li>Simple to use and understand.</li><li>Supports short-term government appraisal systems.</li></ul><p><strong>Accrual Basis of Accounting:</strong></p><ul><li>Recognizes revenue and expenses when they occur, not when cash is paid or received.</li><li>Used by Government Base Enterprises (GBEs) and gaining global acceptance.</li><li>Criticisms: <ul><li>Not suitable for businesses with little to no capital investments.</li><li>Useless for businesses operating solely on a cash basis.</li><li>Complicated due to necessary adjustments for final accounts and statements.</li></ul></li></ul><p><strong>Differences Between Public and Private Sector Accounting</strong></p><ol><li><strong>Goals:</strong><ul><li>Public sector: Provide goods and services at reasonable prices.</li><li>Private sector: Maximize profit.</li></ul></li><li><strong>Reporting:</strong><ul><li>Public sector: Reports to the general public.</li><li>Private sector: Reports to shareholders.</li></ul></li><li><strong>Asset Cost:</strong><ul><li>Public sector: Written off in the year of purchase.</li><li>Private sector: Spread over the asset's useful life.</li></ul></li><li><strong>Focus:</strong><ul><li>Public sector: Attention on the public.</li><li>Private sector: Attention on paying customers.</li></ul></li><li><strong>Governance:</strong><ul><li>Public sector: Governed by the constitution.</li><li>Private sector: Governed by the Company and Allied Matters Act (CAMA).</li></ul></li></ol>`
  },
  {
    id: 2025,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'PUBLIC SECTOR ACCOUNTING',
    subtopic: 'Government Revenue',
    summary_60s: 'Government revenue refers to the funds collected by different levels of government to finance public services, infrastructure, and administration. These revenues come from a variety of sources depending on the level of government. 1. Federal Government Revenue Sources The federal',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Government Revenue in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Government revenue refers to the funds collected by different levels of government to finance public services, infrastructure, and administration.</p><p>These revenues come from a variety of sources depending on the level of government.</p><h2><strong>1. Federal Government Revenue Sources</strong></h2><p>The federal government, being responsible for the largest portion of national expenditures, draws its revenue from various streams, including:</p><table border="1" style="width:500px"><thead><tr><th><strong>Source</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td><strong>Direct Taxes</strong></td><td>Taxes levied directly on individuals and companies, such as personal income tax and corporate tax.</td></tr><tr><td><strong>Indirect Taxes</strong></td><td>Taxes on goods and services, such as Value Added Tax (VAT) and import duties.</td></tr><tr><td><strong>Mining Activities</strong></td><td>Revenue from the extraction and exportation of natural resources like crude oil and minerals.</td></tr><tr><td><strong>Fees</strong></td><td>Charges for specific services, such as passport issuance or regulatory approvals.</td></tr><tr><td><strong>Earnings and Sales of Government Properties</strong></td><td>Income generated from selling or leasing government-owned properties.</td></tr><tr><td><strong>Licenses and Internal Revenue</strong></td><td>Revenue from issuing licenses, permits, and other administrative activities.</td></tr><tr><td><strong>Interest and Repayments</strong></td><td>Income from loans given by the government to organizations or other countries.</td></tr><tr><td><strong>Rent on Government Properties</strong></td><td>Payments received for the use of government-owned buildings and lands.</td></tr><tr><td><strong>Armed Forces</strong></td><td>Revenue from defense-related services, sales, or operations.</td></tr></tbody></table><h2><strong>2. State Government Revenue Sources</strong></h2><p>The state government generates revenue to fund regional projects and administrative responsibilities. Its sources include:</p><table border="1" style="width:500px"><thead><tr><th><strong>Source</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td><strong>Statutory Allocation</strong></td><td>Funds distributed from the federal revenue pool to states based on agreed allocation formulas.</td></tr><tr><td><strong>Income Tax</strong></td><td>Taxes on income within the state's jurisdiction, such as Pay-As-You-Earn (PAYE) tax.</td></tr><tr><td><strong>State Government Properties</strong></td><td>Revenue from the use, sale, or lease of properties owned by the state.</td></tr><tr><td><strong>Interest and Loan Repayments</strong></td><td>Income from loans disbursed to individuals, organizations, or local governments.</td></tr><tr><td><strong>Vehicle Licenses</strong></td><td>Revenue from car, motorcycle, and vehicle licensing within the state.</td></tr><tr><td><strong>Fees</strong></td><td>Charges for services provided by the state, such as marriage certificates or health permits.</td></tr><tr><td><strong>Rent</strong></td><td>Earnings from leasing or renting out state-owned assets.</td></tr></tbody></table><h2><strong>3. Local Government Revenue Sources</strong></h2><p>At the grassroots level, local governments rely on smaller, community-based revenue streams to support their activities:</p><table border="1" style="width:500px"><thead><tr><th><strong>Source</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td><strong>Donations</strong></td><td>Voluntary contributions from individuals, organizations, or international bodies.</td></tr><tr><td><strong>Special Grants</strong></td><td>Financial aid provided by the federal or state government for specific projects.</td></tr><tr><td><strong>Fines</strong></td><td>Penalties imposed for violating local laws or regulations.</td></tr><tr><td><strong>Tenement Rates</strong></td><td>Taxes levied on properties within the local jurisdiction.</td></tr><tr><td><strong>Park Collections</strong></td><td>Revenue from transport services or fees collected at motor parks and bus stops.</td></tr><tr><td><strong>License Renewals</strong></td><td>Charges for renewing licenses, such as business permits or building approvals.</td></tr></tbody></table>`
  },
  {
    id: 2026,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'PUBLIC SECTOR ACCOUNTING',
    subtopic: 'Capital And Recurrent Expenditure',
    summary_60s: 'Think of a business like a castle. "Capital Expenditure" lays the foundation stones – buildings, equipment, anything necessary for long-term growth. But castles need maintenance and upkeep! "Recurrent Expenditure" pays for everyday repairs and supplies to keep things running smoo',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Capital And Recurrent Expenditure in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Think of a business like a castle. "Capital Expenditure" lays the foundation stones – buildings, equipment, anything necessary for long-term growth.</p><p>But castles need maintenance and upkeep! "Recurrent Expenditure" pays for everyday repairs and supplies to keep things running smoothly.</p><h2 style="text-align:center"><strong>Capital and Recurrent Expenditure</strong></h2><h2><strong>Capital Expenditures:</strong></h2><ul><li>Expenses that add to the value of assets or fixed assets.</li><li>Referred to as expenditures of a capital nature.</li><li>Examples include: <ul><li>Construction of roads, waterways, hospitals, and railways.</li><li>Purchase of vehicles, airports, seaports, and machinery.</li></ul></li><li>Usually funded by development funds.</li></ul><h2><strong>Recurrent Expenditures:</strong></h2><ul><li>Day-to-day costs of running government departments.</li><li>Examples include: <ul><li>Wages and salaries.</li><li>Transport and building maintenance.</li><li>Purchase of drugs for hospitals.</li><li>Servicing of cars or vehicles.</li></ul></li><li>Charged to the consolidated fund.</li></ul>`
  },
  {
    id: 2027,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'PUBLIC SECTOR ACCOUNTING',
    subtopic: 'Consolidated Revenue Fund',
    summary_60s: 'The Consolidated Revenue Fund (CRF) is a central fund where all revenues generated in the federation are kept.From this fund, statutory allocations to state governments, recurrent expenditures, and federal capital expenditures are distributed. ILLUSTRATION The following informati',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Consolidated Revenue Fund in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>The Consolidated Revenue Fund (CRF) is a central fund where all revenues generated in the federation are kept.From this fund, statutory allocations to state governments, recurrent expenditures, and federal capital expenditures are distributed. <strong>ILLUSTRATION</strong>The following information were gotten from the treasury department of the office of the Accountant-general of the federation for the month of June</p><table style="width:400px"><tbody><tr><th><strong>INFLOWS</strong></th><th><strong>N ('000)</strong></th></tr><tr><td>Companies' income tax</td><td>355,000</td></tr><tr><td>Petroleum profit tax</td><td>1,600,000</td></tr><tr><td>Excise duties</td><td>50,000</td></tr><tr><td>Export duties</td><td>35,000</td></tr><tr><td>Import duties</td><td>20,000</td></tr><tr><td>Dividends from federal government investment</td><td>6,000</td></tr><tr><td>PAYE deductions from; Armed forces</td><td>15,000</td></tr><tr><td>Police personnel</td><td>3,000</td></tr><tr><td>Residents of FCT</td><td>2,000</td></tr><tr><td>Balance b/f as at 1/6/2023</td><td>3,000</td></tr></tbody></table><table style="width:400px"><tbody><tr><th><strong>OUTFLOWS</strong></th><th><strong>N ('000)</strong></th></tr><tr><td>Contingency fund</td><td>10,000</td></tr><tr><td>Transfer to development fund</td><td>50,000</td></tr><tr><td>Recurrent expenditure</td><td>750,000</td></tr><tr><td>Remuneration of statutory officers</td><td>13,000</td></tr></tbody></table><p><strong>Additional information</strong>Revenue allocation should be taken as;</p><ul><li>Federal government 48.5%.</li><li>State government 24%.</li><li>Local government 20%.</li><li>Others 7.5%.</li></ul><p>You are required to prepare consolidated revenue fund account for the month June 2023<strong>SOLUTION</strong>Note that the federation account will be prepared to ascertain the total revenue generated by the government and the share of each level of government. <strong>FEDERATION ACCOUNT</strong></p><table border="1" style="width:500px"><tbody><tr><th>DETAILS</th><th>N ('000)</th><th>N ('000)</th></tr><tr><td><strong>SOURCES</strong></td></tr><tr><td>Company income tax</td><td>355000</td></tr><tr><td>Petroleum profit tax</td><td>1600000</td></tr><tr><td>Excise duties</td><td>50000</td></tr><tr><td>Export duties</td><td>35000</td></tr><tr><td>Import duties</td><td>20000</td></tr><tr><td><strong>2060000</strong></td></tr><tr><td><strong>Less: DISBURSEMENT</strong></td><td><strong>(2060000)</strong></td></tr><tr><td>Federal govt. (48.5%)</td><td>999100</td></tr><tr><td>State govt. (24%)</td><td>494400</td></tr><tr><td>Local govt. (20%)</td><td>412000</td></tr><tr><td>Others (7.5%)</td><td>154500</td></tr><tr><td>nil</td></tr></tbody></table><p><strong>CONSOLIDATED REVENUE ACCOUNT FUND FOR THE MONTH OF JUNE, 2023</strong></p><table border="1" style="width:500px"><tbody><tr><th>DETAILS</th><th>N ('000)</th><th>N ('000)</th></tr><tr><td><strong>SOURCES</strong></td></tr><tr><td>Federation account</td><td>999100</td></tr><tr><td>PAYE deductions, Armed force</td><td>15000</td></tr><tr><td>Police personnel</td><td>3000</td></tr><tr><td>Residence of Abuja (FCT)</td><td>2000</td></tr><tr><td>Dividends from Federal govt. investments</td><td>6000</td></tr><tr><td><strong>1,025,100</strong></td></tr><tr><td><strong>Less: DISBURSEMENT</strong></td></tr><tr><td>Contingency fund</td><td>10000</td></tr><tr><td>Development fund</td><td>50000</td></tr><tr><td>Remuneration of statutory officer</td><td>13000</td></tr><tr><td>Recurrent expenditure</td><td>750000</td><td>(823000)</td></tr><tr><td>Balance for the year</td><td>202100</td></tr><tr><td>Bal b/f</td><td>3000</td></tr><tr><td>Balance c/f July 2023</td><td>205100</td></tr></tbody></table>`
  },
  {
    id: 2028,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'PUBLIC SECTOR ACCOUNTING',
    subtopic: 'Responsibilities And Powers',
    summary_60s: 'Imagine money as a powerful river flowing through businesses, institutions, and governments. Financial officials are the captains, guiding it wisely to its destination. Responsibilities and Powers 1. Accountant General of the Federation The Accountant General is the chief account',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Responsibilities And Powers in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Imagine money as a powerful river flowing through businesses, institutions, and governments. Financial officials are the captains, guiding it wisely to its destination.</p><h2 style="text-align:center"><strong>Responsibilities and Powers</strong></h2><h2><strong>1. Accountant General of the Federation</strong></h2><p>The Accountant General is the chief accounting officer responsible for preparing financial statements that reflect the nation's true state of affairs.</p><p><strong>Powers of the Accountant General:</strong></p><ul><li>Maintain proper books of account.</li><li>Supervise all officers under their authority.</li><li>Establish an internal audit department to complement the internal control system.</li><li>Ensure adequate security over government funds.</li><li>Prepare management accounts as required by the Minister of Finance.</li></ul><h2><strong>2. Auditor General of the Federation</strong></h2><p>The Auditor General plays a critical role in ensuring accountability by examining the financial activities of all public offices. This position exists to guarantee that public funds are utilized transparently and efficiently.</p><p><strong>Key Responsibilities and Powers</strong></p><ul><li><strong>Audit Financial Records</strong>: Scrutinize the accounts of accounting officers and any official handling government resources.</li><li><strong>Compliance Monitoring</strong>: Ensure financial regulations are strictly adhered to.</li><li><strong>Promote Public Accountability</strong>: Review how public resources are managed to foster trust in governance.</li></ul><h2><strong>3. Minister of Finance</strong></h2><p>The Minister of Finance oversees the Ministry of Finance with the following powers:</p><ul><li>Control of expenditure on votes.</li><li>Budget and planning.</li><li>Economic planning.</li><li>Monitoring import duty.</li><li>Exchange control policy.</li><li>Implementing national development programs and policies.</li></ul><h2><strong>4. Treasurer of Local Government</strong></h2><p>The Treasurer manages public funds at the local level. Responsibilities include:</p><ul><li>Conducting surprise cash surveys on government parastatals.</li><li>Collecting money on behalf of the government.</li><li>Assessing the internal control system's effectiveness.</li></ul><p><strong>Key Responsibilities</strong></p><ul><li><strong>Surprise Cash Inspections</strong>: Conduct unannounced surveys of government parastatals to prevent misappropriation.</li><li><strong>Revenue Collection</strong>: Collect funds on behalf of the government.</li><li><strong>Evaluate Controls</strong>: Assess the effectiveness of the local internal control systems and recommend improvements.</li></ul>`
  },
  {
    id: 2029,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'PUBLIC SECTOR ACCOUNTING',
    subtopic: 'Financial Regulation',
    summary_60s: 'Instruments of financial regulation are the tools and mechanisms that regulatory bodies use to oversee and control the financial system. These instruments aim to ensure the stability, fairness, and efficiency of financial markets and institutions. These tools regulate government ',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Financial Regulation in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Instruments of financial regulation are the tools and mechanisms that regulatory bodies use to oversee and control the financial system.</p><p>These instruments aim to ensure the stability, fairness, and efficiency of financial markets and institutions.</p><p><strong>These tools regulate government financial activities:</strong></p><ol><li><strong>Warrant:</strong> Authorizes the disbursement of money from the government. Examples include annual general warrant, provisional general warrant, reserve expenditure warrant, supplementary general warrant, virement warrant, and contingency warrant.</li><li><strong>Vote Book:</strong> A memorandum account book used for monitoring government expenditure and preventing extra-budgetary spending.</li><li><strong>Due Process Certificate:</strong> Certifies that all processes for disbursing funds have been followed strictly.</li><li><strong>Budget:</strong> A planning tool that helps the government allocate expected scarce resources among competing departments during the planned period.</li></ol><table border="1" style="width:500px"><thead><tr><th><strong>Instrument</strong></th><th><strong>Description</strong></th><th><strong>Purpose</strong></th></tr></thead><tbody><tr><td><strong>Warrant</strong></td><td>An official document authorizing the release of government funds.</td><td>Prevents unauthorized disbursement of public funds.</td></tr><tr><td><strong>Types of Warrants</strong></td><td>Examples: Annual General Warrant, Provisional General Warrant, Reserve Expenditure Warrant, etc.</td><td>Facilitates controlled and specific disbursements.</td></tr><tr><td><strong>Vote Book</strong></td><td>A memorandum account book for tracking government expenditure.</td><td>Monitors spending to prevent exceeding approved budget allocations.</td></tr><tr><td><strong>Due Process Certificate</strong></td><td>Verifies compliance with all necessary procedures for disbursement.</td><td>Ensures transparency and adherence to established financial protocols.</td></tr><tr><td><strong>Budget</strong></td><td>A financial plan detailing expected revenues and expenditures for a specific period.</td><td>Guides the allocation of resources across competing government departments.</td></tr></tbody></table>`
  },
  {
    id: 2030,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'INFORMATION TECHNOLOGY',
    subtopic: 'Accounting Processing Systems',
    summary_60s: 'Manual accounting involves the traditional method of recording financial transactions by hand using journals and ledgers. This system is time-consuming, prone to errors due to human calculations, and requires significant physical storage for paper records. In contrast, computeriz',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Accounting Processing Systems in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Manual accounting involves the traditional method of recording financial transactions by hand using journals and ledgers.</p><p>This system is time-consuming, prone to errors due to human calculations, and requires significant physical storage for paper records.</p><p>In contrast, computerized accounting utilizes specialized software to automate the recording, processing, and analysis of financial data.</p><p>This modern approach offers efficiency, accuracy, and faster processing speeds, enabling real-time financial insights.</p><h2 style="text-align:center"><strong>Manual Accounting Processing System</strong></h2><ul><li>Traditional method using papers and file registers for keeping financial records.</li><li>Financial transactions are documented by hand, and ledger entries are made manually.</li><li>Characterized by tangible, hard-copy records.</li></ul><p><strong>Advantages of Manual Accounting</strong></p><ol><li><strong>Reduced Fraud Risk:</strong> Hard to infiltrate documents without authorized signatures.</li><li><strong>No Risk of Corruption:</strong> No technical issues like viruses or bugs.</li><li><strong>Error Correction:</strong> Errors can be easily identified and corrected manually.</li><li><strong>Security:</strong> Physical documents are less vulnerable to hacking.</li></ol><p><strong>Disadvantages of Manual Accounting</strong></p><ol><li><strong>Slow and Time-Consuming:</strong> Data entry, calculations, and report generation take more time.</li><li><strong>Human Error:</strong> Higher risk of calculation mistakes and oversights.</li><li><strong>No Backup:</strong> Risk of data loss in case of damage (fire, floods, etc.).</li><li><strong>Higher Labor Costs:</strong> Requires multiple personnel, increasing costs.</li></ol><h2 style="text-align:center"><strong>Computerized Accounting Processing System</strong></h2><ul><li>Utilizes accounting software (e.g., QuickBooks, Sage) for recording financial transactions digitally.</li><li>Eliminates the need for physical documents.</li><li>Transactions are entered into software, storing data in an electronic database.</li></ul><p><strong>Advantages of Computerized Accounting</strong></p><ol><li><strong>Cost Savings:</strong> Streamlines processes and reduces manual labor.</li><li><strong>Minimal Human Error:</strong> Automated tasks reduce inaccuracies.</li><li><strong>Backup Availability:</strong> Automated backups ensure data security.</li><li><strong>Speed and Ease:</strong> Fast, user-friendly data entry and report generation.</li><li><strong>Efficiency:</strong> Improved effectiveness in handling financial tasks.</li></ol><p><strong>Disadvantages of Computerized Accounting</strong></p><ol><li><strong>High Training Costs:</strong> Significant investment needed for staff training.</li><li><strong>Service Disruptions:</strong> Vulnerable to power outages and network issues.</li><li><strong>Cybersecurity Risks:</strong> Increased risk of hacking and data theft.</li><li><strong>Data Theft:</strong> Electronic data can be more easily stolen without robust security measures.</li></ol>`
  },
  {
    id: 2031,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'INFORMATION TECHNOLOGY',
    subtopic: 'Data Processing',
    summary_60s: 'Data processing involves collecting and manipulating digital data to generate meaningful information. It converts raw information into machine-readable forms using software. Errors during data input can affect the results, so proper organization and manipulation of data are cruci',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Data Processing in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p>Data processing involves collecting and manipulating digital data to generate meaningful information. It converts raw information into machine-readable forms using software.</p><p>Errors during data input can affect the results, so proper organization and manipulation of data are crucial for producing useful information.</p><h2 style="text-align:center"><strong>Stages of Data Processing</strong></h2><p><strong>1. Data Collection:</strong></p><ul><li>Gathering data from different sources and categorizing it into relevant groups.</li><li><strong>Importance:</strong> Ensures the data collected is reliable and valid.</li><li><strong>Key Points:</strong> Be meticulous to avoid incomplete or incorrect information.</li></ul><p><strong>2. Data Input:</strong></p><ul><li>Entering well-structured, collected data into the computer system for further use.</li><li><strong>Importance:</strong> Transforms gathered data into a usable format.</li><li><strong>Key Points:</strong> Accuracy is crucial, as incorrect input can affect the final outcomes.</li></ul><p><strong>3. Data Analysis:</strong></p><ul><li>Examining entered data and applying appropriate models to extract valuable information.</li><li><strong>Importance:</strong> Provides insights needed by the organization or management.</li><li><strong>Key Points:</strong> Consider the data source and expected use to derive meaningful information.</li></ul><p><strong>4. Data Output:</strong></p><ul><li>The final stage where all relevant information is sorted and sent to users for decision-making.</li><li><strong>Importance:</strong> Provides clear and meaningful representation of analyzed data.</li><li><strong>Key Points:</strong> Ensures processed information is effectively communicated and utilized for strategic purposes.</li></ul>`
  },
  {
    id: 2032,
    subject: 'Accounting',
    exam_type: 'JAMB • WAEC • NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'INFORMATION TECHNOLOGY',
    subtopic: 'Hardware And Software',
    summary_60s: 'Hardware and software are the backbone of modern accounting systems. Hardware refers to the physical components of a computer system, such as the CPU, monitor, keyboard, and storage devices. These components provide the platform for accounting software to operate. Software, on th',
    key_formulas: '',
    pro_tips_95: 'Official JAMB & WAEC Syllabus Concept: Focus on core definitions, formulas, and past questions.',
    syllabus_objectives: 'Candidates should be able to master the fundamental principles of Hardware And Software in line with the official syllabus.',
    updated_at: 'JAMB • WAEC Official Syllabus',
    content: `<p><strong>Hardware</strong> and <strong> software</strong> are the backbone of modern accounting systems. Hardware refers to the physical components of a computer system, such as the CPU, monitor, keyboard, and storage devices.</p><p>These components provide the platform for accounting software to operate. Software, on the other hand, is the intangible set of instructions that tells the hardware what to do.</p><p>Accounting software specifically handles financial transactions, generating reports, managing accounts payable and receivable, and performing other accounting functions.</p><p>The integration of hardware and software has revolutionized accounting practices, enabling efficient data processing, analysis, and decision-making.</p><h2><strong>Computer Hardware</strong></h2><ul><li>Physical components of a computer that you can see and handle, such as: <ul><li>Mouse.</li><li>Keyboard.</li><li>Motherboard.</li><li>Monitor.</li></ul></li><li>Hardware supports computer software in performing tasks by transmitting information to it, which then processes the data for the user.</li><li>Susceptible to physical damage from dust, food crumbs, liquids, etc.</li></ul><h2><strong>Computer Software</strong></h2><ul><li>Intangible programs and instructions that tell the hardware how to perform tasks.</li><li>Software types: <ul><li><strong>System Software:</strong> Operating systems like Windows, macOS, Linux that manage hardware resources.</li><li><strong>Application Software:</strong> Programs like MS Word, web browsers, and database tools designed for specific tasks.</li></ul></li><li>Software relies on hardware to execute its instructions, and hardware needs software to perform meaningful tasks.</li><li>Vulnerable to issues like viruses and bugs.</li></ul><h2 style="text-align:center"><strong>Key Computer Components</strong></h2><p><strong>1. Input Devices:</strong></p><ul><li>Enable users to input data into the computer.</li><li>Convert information into a format the computer can understand (binary code).</li><li>Examples: <ul><li><strong>Keyboards:</strong> For text input.</li><li><strong>Voice Recognition Devices:</strong> Convert spoken words into digital data.</li><li><strong>Others:</strong> Mice, touchscreens, scanners.</li></ul></li></ul><p><strong>2. Central Processing Unit (CPU):</strong></p><ul><li>The brain of the computer, responsible for computations and data processing.</li><li>Key components: <ul><li><strong>Arithmetic and Logic Unit (ALU):</strong> Performs mathematical operations and logical comparisons.</li><li><strong>Control Unit:</strong> Manages and coordinates activities of other hardware components.</li><li><strong>Internal Memory (Cache):</strong> Provides quick access to frequently used data.</li></ul></li><li>Executes instructions and processes data to fulfill tasks.</li></ul><p><strong>3. Output Devices:</strong></p><ul><li>Convey processed data or information to users.</li><li>Present results of computations in a human-readable format.</li><li>Examples: <ul><li><strong>Monitors:</strong> Display visual information.</li><li><strong>Printers:</strong> Produce hard copies of documents or images.</li><li><strong>Others:</strong> Speakers, projectors.</li></ul></li></ul>`
  },
];
