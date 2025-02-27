import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does Messagram work?',
      answer:
        'Messagram acts as a bridge between your SMS messages and Telegram. When you receive an SMS, our app forwards it to your designated Telegram chat or group instantly.',
    },
    {
      question: 'Is it secure to use Messagram?',
      answer:
        'Yes! We use end-to-end encryption for all message forwarding. We never store your messages permanently, and your data is protected with enterprise-grade security.',
    },
    {
      question: 'Do I need a Telegram account to use Messagram?',
      answer:
        "Yes, you'll need a Telegram account to receive forwarded messages. If you don't have one, it's free and easy to create at telegram.org.",
    },
  ],
  [
    {
      question: 'Can I forward messages to multiple Telegram chats?',
      answer:
        'Yes! Our Couple and Business plans allow you to forward messages to multiple Telegram chats simultaneously. You can even set up custom routing rules.',
    },
    {
      question: 'Does Messagram work internationally?',
      answer:
        'Yes, Messagram works worldwide. As long as you can receive SMS messages and have an internet connection for Telegram, you\'re good to go.',
    },
    {
      question: 'What happens if I lose internet connectivity?',
      answer:
        "Don't worry! Messagram will queue your messages and forward them as soon as your internet connection is restored. You won't miss any messages.",
    },
  ],
  [
    {
      question: 'Can I filter which SMS messages get forwarded?',
      answer:
        'Absolutely! You can set up custom filters based on sender, content, or timing. This is especially useful for businesses managing different types of communications.',
    },
    {
      question: 'How long do you keep message history?',
      answer:
        "Message history retention depends on your plan. Personal plans don't include history, Couple plans keep 30 days of history, and Business plans maintain a full year of message history.",
    },
    {
      question: 'Can I try Messagram before subscribing?',
      answer:
        'Yes! Our Personal plan is free forever and includes basic features. You can upgrade to Couple or Business plans anytime to access more features.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@messagram.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
