export interface FaqItem {
  question: string;
  answer: string;
}

const FaqItems: FaqItem[] = [
  {
    question: "What is Crypto Trading Flow?",
    answer:
      "Crypto Trading Flow is a community focused on leveraging automated bots to trade cryptocurrencies. We offer a variety of trading bots, ranging from free to paid options, with different cryptocurrency pairs.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can ask for support on the discord support channel or you can send an email to support@cryptotradingflow.com",
  },
  {
    question: "Is there a setup guide to help me get started using a CTF bot?",
    answer:
      "You can check our official website or follow the setup guide document. You can find the links to both on discord helpful-links.",
  },
  {
    question: "What do I need in order to start running a CTF bot?",
    answer:
      "To use our trading bots, you'll need a KYC-verified Binance Futures account. If you don't have an account, you can use our affiliate link for a trading fee discount: https://accounts.binance.com/register?ref=DWHURPU7\n You'll also need an account at Wundertrading, with no KYC required. If you don't have an account, you can use our affiliate link for a subscription discount: https://wundertrading.com/en/trader/register?ref=wbt82e47df7",
  },
  {
    question: "What exchanges are supported?",
    answer:
      "Currently, we only support Futures Trading on Binance. However, more exchanges will be added in the future.",
  },
  {
    question: "What's the minimum amount I need to have in my account?",
    answer:
      "You'll need to have an equivalent of at least $125 to use the free bots and $250 for the paid bots in order for our bots to work properly.",
  },
  {
    question: "Is there a risk I could lose all my money?",
    answer:
      "Yes, although unlikely, it can always happen as the markets are constantly changing, and past performance doesn't guarantee future results.",
  },
  {
    question: "Can I change the bot parameters?",
    answer:
      "Changing the bot parameters instead of simply copy-trading is not advised and can lead to unexpected losses. Our bots are optimized for the parameters they're using, and they shouldn't be changed.",
  },
  {
    question: "How do I get the Flow Whale role in Discord?",
    answer:
      "If you have an active pro subscription on Wundertrading and you're copy-trading at least one of our paid bots, you can go to the discord pro-verification channel and type your Wundertrading username to get verified.",
  },
];

export default FaqItems;
