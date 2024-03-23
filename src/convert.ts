
export function ConvertAccountNumber (value: string): string {
  let accountNumber = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
  return accountNumber
}

export function StrLength (value: string, length: number): string {
  return value.length > length ? value.substring(0, length) + '...' : value
}

export function ConvertInitialName (value: string) {
  let name = value.split(' ')
  let initialName = name[0].charAt(0) + name[1].charAt(0)
  return initialName.toUpperCase()
}

export function ConvertCurrency (value: number, currency: string, withDecimal: boolean): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: currency, maximumFractionDigits: withDecimal ? 1 : 0 }).format(value);
}

export function ConvertCurrencyWithoutSymbol (value: number): string {
  return new Intl.NumberFormat('id-ID').format(value);
}

export function ConvertCurrencyWithoutDecimal (value: number): string {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(value);
}

export function ConvertToPercent(value: string): string {
  let price = ""
    const reverseNumber = value
        .toString()
        .split("")
        .reverse()
        .join("")
    const arrReverseNumber = [...Array(reverseNumber.length).keys()]
    arrReverseNumber.map(index => {
        if (index % 3 === 0) price += reverseNumber.substr(index, 3) + "."
    })
    let pricing = `${price.split("", price.length - 1).reverse().join("")}`

    return parseInt(pricing) + `%`
}

export function ConvertNumber(value: string): string {
  let price = ""
    const reverseNumber = value
        .toString()
        .split("")
        .reverse()
        .join("")
    const arrReverseNumber = [...Array(reverseNumber.length).keys()]
    arrReverseNumber.map(index => {
        if (index % 3 === 0) price += reverseNumber.substr(index, 3) + "."
    })
    let pricing = `${price.split("", price.length - 1).reverse().join("")}`

    return pricing
}

export function IsEmpty(value: string): string | number {
  if (value === null || value === undefined || value === '') {
    return '-'
  } else {
    return value
  }
}

export function ConvertNumberToBilangan(value: string | number) : string {
  value    = value.toString();
  let angka:string[]   = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'),
      kata    = new Array('','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan'),
      tingkat = new Array('','Ribu','Juta','Milyar','Triliun'),
 
      panjang_bilangan = value.length,
      kaLimat = "";
 
  /* pengujian panjang bilangan */
  if (panjang_bilangan > 15) {
    kaLimat = "Diluar Batas";
    return kaLimat;
  }
 
  /* mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array */
  for (let i = 1; i <= panjang_bilangan; i++) {
    angka[i] = value.substr(-(i),1);
  }
 
  let i = 1,
      j = 0;
  
 
 
  /* mulai proses iterasi terhadap array angka */
  while (i <= panjang_bilangan) {
 
    let subkaLimat = "",
        kata1 = "",
        kata2 = "",
        kata3 = "";
 
    /* untuk Ratusan */
    if (angka[i+2] != "0") {
      if (angka[i+2] == "1") {
        kata1 = "Seratus";
      } else {
        kata1 = kata[Number(angka[i+2])] + " Ratus";
      }
    }
 
    /* untuk Puluhan atau Belasan */
    if (angka[i+1] != "0") {
      if (angka[i+1] == "1") {
        if (angka[i] == "0") {
          kata2 = "Sepuluh";
        } else if (angka[i] == "1") {
          kata2 = "Sebelas";
        } else {
          kata2 = kata[Number(angka[i])] + " Belas";
        }
      } else {
        kata2 = kata[Number(angka[i+1])] + " Puluh";
      }
    }
 
    /* untuk Satuan */
    if (angka[i] != "0") {
      if (angka[i+1] != "1") {
        kata3 = kata[Number(angka[i])];
      }
    }
 
    /* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
    if ((angka[i] != "0") || (angka[i+1] != "0") || (angka[i+2] != "0")) {
      subkaLimat = kata1+" "+kata2+" "+kata3+" "+tingkat[j]+" ";
    }
 
    /* gabungkan variabe sub kaLimat (untuk Satu blok 3 angka) ke variabel kaLimat */
    kaLimat = subkaLimat + kaLimat;
    i = i + 3;
    j = j + 1;
 
  }
 
  /* mengganti Satu Ribu jadi Seribu jika diperlukan */
  if ((angka[5] == "0") && (angka[6] == "0")) {
    kaLimat = kaLimat.replace("Satu Ribu","Seribu");
  }
 
  return kaLimat + "Rupiah";
}