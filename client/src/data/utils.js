
export const getCurrentMonthAndYear = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];

    return `${months[new Date().getMonth()]} ${new Date().getFullYear()}`
}

export const char_data = [
    {
         name: "Jan",
         MonthInflow: 6800,
         CreditGiven: 2400
    },
    {
         name: "Feb",
         MonthInflow: 5000,
         CreditGiven: 1800
    },
    {
       name: "Mar",
       MonthInflow: 7000,
       CreditGiven: 2500
    },
    {
       name: "Apr",
       MonthInflow: 5600,
       CreditGiven: 3800
   },
   {
       name: "May",
       MonthInflow: 4000,
       CreditGiven: 6800
  },
  {
         name: "Jun",
         MonthInflow: 2000,
         CreditGiven: 800
    },
    {
       name: "Jul",
       MonthInflow: 9000,
       CreditGiven: 4800
   },
   {
       name: "Aug",
       MonthInflow: 14000,
       CreditGiven: 8800
  },
   {
         name: "Sep",
         MonthInflow: 9000,
         CreditGiven: 6800
    },
   {
       name: "Oct",
       MonthInflow: 10000,
       CreditGiven: 5800
  },
   {
         name: "Nov",
         MonthInflow: 2800,
         CreditGiven: 800
    },
    {
       name: "Dec",
       MonthInflow: 7000,
       CreditGiven: 2800
  },
]