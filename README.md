# Props va State

Reactda Props va State  komponentlarga malumotlarni uzatish va boshqarishda ishlatiladi. 

## 1. Props(properties)

- **Props**  (yoki properties) - bu komponentlarga tashqaridan uzatiladigan ma'lumotlardir. Bu misol uchun tepadagi komponentladan pastdagi komponentlaga uzatilishida ishlatiladi.

- Props **faqat o'qilishi mumkin** (immutable -o'zgartirib bo'lmaydi).



### **Propsning ishlashini tushuntirish:**

-  **Parent komponent** (ota komponent) boshqa komponentlarga props orqali malumot yuboriladi.

- **Child komponent** (bola komponent) esa o'zida qabul qilingan propslarni foydalanadi.


### 1. State

- **State -** bu komponentning o'zida sqalandaigan ma'lumotlar bo'lib, bu ma'lumotlar o'zgarishi mumkin.(**mutable**)

- State faqat komponent ichida o'zgartirilishi mumkin.

- State yordamida foydalanuvhi bilan o'zaro aloqalar (masalan, tugmalarni bosish, forma kirishi ) yoki tashqi hodisalar (masalan API so'rovlarini bajarish) natijasida komponentni yangilash mumkin.


**Statening ishlashini tushuntirish:**

- **Komponentda saqlanadi:** Har bir React komponenti o'zinig **state**iga ega bo'lishi mumkin.
- **O'zgaradi:** State o'zgarganda React komponenti avtomatik ravishda qayta render qiladi.



## Component Lifescycle 


Lifecycle yordamida siz komponent bilan bog‘liq turli jarayonlarni boshqarishingiz mumkin, masalan:

Komponent DOMga qo‘shilganda yoki olib tashlanganda bajariladigan ishlarni boshqarish (masalan, ma'lumot olish yoki resurslarni tozalash).
Ma'lumotlarni yuklash yoki yangilash.
Keraksiz ishlov berishlarni oldini olish.




**Component Lifecycle bosqichlari:**
1. Mounting (komponentning DOMga birinchi marta joylashishi):

 - Bu bosqichda komponent yaratilib, birinchi marta DOMga qo‘shiladi.
 - Bu yerda siz, odatda, ma'lumotlarni yuklash yoki boshlang‘ich holatni sozlashni amalga oshirasiz.
- Lifecycle Method (Class Components):
   - constructor() (boshlang'ich sozlash)
   -  render() (UI chizish)
   -   componentDidMount() (DOMga joylashgandan keyingi ishlar)
2. Updating (*komponent yangilanishi*):

Komponent state yoki props o'zgarganda qayta chiziladi.
Bu bosqichda siz ma'lumotni qayta yuklash yoki yangi holatlarga mos o'zgarishlar qilishingiz mumkin.
Lifecycle Method (Class Components):
render() (har safar UI qayta chiziladi)
componentDidUpdate() (yangilanishdan keyingi ishlar)
Unmounting (komponent DOMdan olib tashlanishi):

Komponent DOMdan olib tashlanganda sodir bo‘ladi.
Bu bosqichda siz resurslarni tozalash yoki o‘rnatilgan hodisalarni o‘chirishni amalga oshirasiz.
Lifecycle Method (Class Components):
componentWillUnmount()



## UseEffect


**UseEffect** bu React hooki bo‘lib, u yordamida komponentda biror ishni avtomatik bajarish mumkin. Masalan, ma'lumot olish, DOMni o‘zgartirish, yoki loglarni chiqarish kabi vazifalarni bajarishda ishlatiladi.

Oddiy tushuncha:
useEffect yordamida React komponentlari ichida qo'shimcha harakatlar (side effects) bajariladi.
Masalan, komponent yuklanganda ma'lumot olish, yoki biror o'zgarishdan keyin biror vazifani bajarish uchun ishlatiladi.


**useEffect** hooki yordamida Mounting, Updating, va Unmounting kabi lifecycle bosqichlarini boshqarish mumkin. Bu React Function Components uchun juda kuchli va moslashuvchan vositadir!


