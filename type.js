const iphone13 = {
    screen: 'OLED6.7"Super Retina XDR',
    chip: 'Apple A15 Bionic',
    ram: '6 GB'
 }
 const iphone11 = iphone13
 iphone11.ram = '12 GB'
 const iphone6 = iphone11
 console.log('iphone6 === iphone13 : ', iphone6 === iphone13) // Output?
 