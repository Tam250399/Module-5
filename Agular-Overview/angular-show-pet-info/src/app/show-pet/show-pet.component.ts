import { Component, OnInit } from '@angular/core';
export interface Pet {
  name ?: string;
  image ?: string;
}
@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.css']
})
export class ShowPetComponent implements OnInit {
  pet: Pet = {
  name: 'puppie',
  image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhYSEhUVFhYaEhISEhgYHBgYHBIVGhgZGRwYGRYcJS4lHB4rHxkZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzUlJSs0NDQ2NDQxMTQ0MTY0NDQ0NDQ0NDQ0NDQ0NDQxMTQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ/P//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwIEAQUGBwj/xABBEAABAgMECAMEBgoCAwAAAAABAAIDBBETITFRBQYSMkFhcYEikbEHFKHRQlJUcpPBFiMzYoKSouHw8VOyNENE/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAIBEBAQEBAAIDAQEBAQAAAAAAAAECEQMxBBIhUSJBE//aAAwDAQACEQMRAD8A9lUI26e3qi1bn6qL3AigvKCsny3HsoWTsvRSh+Gu1dXBBYVWNvHsnWrc/VKe0uNReECleCq2TsvROtW5+qDMXdKqKy54IoDeq7xs02rqkNF4vJNAPNAyBx4XLktbpjSEs0xoEbbhfSBYwuh8yQ2hbz4LdaXfMw2F8s2G8gVMNwNX0+q4HHkVzMn7QYUQOgzcEsBBY4gl7aG4hzSKj4qOrPXpPOb79ucg69zoNXOY/k5jR8WUXT6H18gxCGR2mC4/SrVhPM4t73LzeehtZEexjg5jXvaxwwcwE7Lh1FElUzeovuM19EQ3ggEEEEAgi8EcisxMD0Xk2pmsbmNdKxyTBex4hk1/Vu2SaA/VPwNFPVjXeJDcIU05z4R8Ie690PI1xcOt6tnkim+LX671mk2OmnSrb3thWjz9WrmgN60NfJbSXxPReVaraWrpR8RxujOiQwepBYP6QF6rD8ONy7nX2R1n61YVaY3uybatz9UqI0uNReFJEpXWYDoFWsnZeidaAXV5IJPwPQqmrLngggG/AJVk7L0QSl8T0VhV4Y2TV13BMtW5+qBcxj2+aSnRG7RqLxSijZOy9EEEKdk7L0QgWmQd4d/RT935/BYs9nxVrT/SCwkTHDui35fFG9yp3QIVqBujuoe78/gjb2fDigeqJT7fl8UWHNBWiR2sG240aC0E5bRDfzWq1q0k2FFk2ucA10ztOrwa1pFTyDntS9fKtkIjmm+sMdPGFwOuGlxNQ5WICKiE9sRtd2IC3ar1uIUNa4sxnv69dnYzWs23ODWipLiaADOq8N1gmWRZuNEhDwOiVbwrcATTmQT3VeJOvewMe97mt3QXOIH8JuVauSq1vq7GPqm2Gcll203G74fFRcLq9j1Q15HMcRwUFjG2cz5qQiHOvW9Ye3iMD8OSwjhjHXgt8LgQW0zF4IPAr1jVPWhs1DEOIQ2O0eIYWgA3m88wvI01kZzHNiMcWvBqHC4hw4qWNfWo7xNR7yrMvu9yuM1P1rbMUgRyGxqeE4Ni9MncvJdjtbN2PFaJZZ2Mus3N5T1SfiepTrfl8VixrfXG9dcLh7w6hXEiypfXC9Fvy+KDMxh3VdP2tq7Djmj3fn8EEoGHdNSNrZux45It+XxQWEJFvyQgclxt09vVJtjmpMcXGhwQJT5bj2U7JuShE8O7dXFA9VY28eyLY5pjWhwqcUFdXgl2Lckm1dmg5zXHSEN0GYlHVbE93MaFtYRA3xeE5gtIpivHl6D7UW1fLPONIje1WlefkLP5L/pp8c/yyhCFBYk3AjofL/agAssdQ1U2tvpwIIHfBBhmDhyr5f4VEtuB5keikLiDy/sVJnEZGo7Yo6WgHgh4oSOZQjgY8tIc0kEEFpFxBGBBXsmqmm/e5drnftGeCKM3DB3cX+a8bXUezzSFnONY7ciizP3he0+dR/Ep41yoeTPcvVldZgOgULJuSUYhBp2WhlPfgehVNNbEJNDgbim2TckC5fE9FYSHjZFW9FC2OaDMxj2+aUrDG7Qq7HBSsm5IKyFasm5eqEFRMg7w7+itUS426e3qgYkTHDukVT5bj2QIVqBujumUVWNvHsgtKiUVV1B5N7S5wOmGQh/64dXcnPNaeQHmuQeb9ocf8IVnTM8Y8xFjH6b3OH3cG/ABVGu4HD0Oay6vb1sxOTjOyDgacj+RWCw5FFnlQ910ehdUY0Wj4lYTMb95w5N4dSoWyJNJKaOixa2cN76Y7IJp1K3WjdT5mJ+0AhN4bd5ryaPzXokhJMgw2w4baNHmTxJPEqyq7u/8d480n9T5ppo1giDEOYQP6XEFVGarzhqbBwoK3loryF95XrgQu/eo9eHzkF7HUiMcx3EOBBr3SV7hMSzHikRjHjJ7WuHkV5lrroWwjWjGgQn3t2RQMfS9tOGYU866OcTJWOWPZEGLHseP4SD+SWoqQ+ioT9prXDAtBHcVVZ+J6lUdBxC6Ul3Zy8E+bGrcswHQLXGOqsPeHUK4ovwPQqnVHFiYw7qunS+J6KxRAqBh3TVXmMeyTVBfQqNUILVo3NRe4EUF5VZMg7w7+iDFk7JMheGu1dknpExw7oGWjc0qIwk1F4SVagbo7oEWTsknTcwGy0ZwN4gxCOuyVsVqp6Btw3w/rQ3s7kELldnt4MFt9X9BvmnkNOyxtLR5vpXgBxK1NOBx4r0rUDZ90NMbV+11up8KLHu8jbGw0Vq7Ly9Cxm0/67/E6vLgOy26EKi3qQQhC4HBCAhTQCTOSjIrHQ4jQ5jhQg+oyKchB4xpzRplo74JNQDVh+sw3g/l2WuXde0qVG1BijEh0M86eIepXDAE3DE3DmVdm9g9v1ahu9ylrv8A5oJ/oat014pSqToyBsQIUP6kKGz+VoH5KD8T1K1z0x32sueCCAb6XJFk7JYh7w6hXF1xXhDZNXXXUTbRuahMYd1XQNiN2jUXilFGzdknQMO6agq2bskK2hBX935rAZs+LGn+lYS426e3qgh7wMkHxcqJCfLceyA935oD9nw4p6qxt49kE/eBkiw5pCvBB4VrZI2E7GZw29tv3Xja/P4LpvZxENnHZwD4bh1cHA/9Qne1TRl8KaaLqWMQ5YuaT/UPJQ9nUEiDFiH6URrRzDW/NxWPzTnWvx3sjsEIQsy0IQhA4IQEKaAQhCDlPaLCrKMd9WMzyLXD1ouK1UlbWdgMIq3bD3fdZ4j6U7r0LXWFtSMXlsP/AJXArnPZnJ7UaJGIuZDDGn955v8Ag34q7xTv4jq8zXqHvAyWLGt9cb0lXWYDoFsZCBCpfXC9Z94GSa/A9CqaB+1tXYcUe781iXxPRWECNrZux4o94GSjMY9vmlILFvyQkIQMtnLLHlxocElMg7w7+iB1i1Qf4d3jinpExw7oI2zlNrQ4VOKrq1A3R3QFi1KtirKolBX0tLMjwYkGLQNc0gn6pxDhzBoVqdByAgS7IVQSBVxH0nE1JW00g0mHdmCeirwT4R0WP5Gv3jV4Z+dMQhCzLghCEDghAQpoBCEIET0sIkN8M4PY5nSopVL1P0O2XlWw6hzyXOiOGBceHQCg7K040BPJZ0I00eeBIp1vr+Su8N5rivyT/PWysWpRikXdlZVJ+J6lbGYxsQk0OBuKbYtVeHvDqFcQIeNm8dFG2cpzGHdV0D2N2hU9FOxasQMO6agXYtQmoQRoMlCKPCf84rNoMwovcCCAalBX2jmmwL615KFm7IpkHw12rsKIHUGSrxj4vJOtBmEmI0k1F4QL2jmrgCq2bsirFoMwgjGYC0gjhRaZsMtq08DdzC3L3AggGpVKahmgJHJUefHZ3+LvDrl5/VVCELC1BCEIHBCAhTQCEIQRe0kEDE3DurTIWwA0cB5niViUpWpyToramovFFr8OeT7M/l1+8L2jmrbRcOgVazdkVYDxTHgr1QeLj0Kq7RzVlzgQQDwSLN2RQSgXm/JWKDJIhChqbrk20GYQKjm+7JK2jmmRRtGovuoo2bsigxtHMrKLM5FCCCZB3h39FOwOYWLPZ8WSCwkTHDupW4yKifFhdRAhWoG6O6XYHMLIfs+EoHqiVZtxkVGwOYQLhbwVh7AQQcClCHs+LJStxkUv6NVEbRxbkaLChpCJSKSOIFQiG8OFy8zck1Y35/cypoQhRdOCEBCmgEBCnCFXAKWZ28Rt5DGtorUvu9yoWBzCztbNxv4rfJycjLb09Un4nqVYtxkVAwSb643rrhcPeHUK4q4hUvrhep24yKDExh3VdPLtq4XcViwOYQTgYd01IDtm438VK3GRQOQk24yKwgclxt09vVKtzyQHlxocCgUny3HspWI5qLvDhxzQPVWNvHss255KYYHCpxQV1eCVYjml2x5IHRd0qomteSaHArnNZ5whwgsJAoHO51wHRQ8m5nPan48XeuQ+ditc+rXBwAAJF99Tcq7XUvCrSA/VjqfVWF5mtfbVrfnP1nFlkz9bzCc14OBCoIXPscbUxGgXkKLIocfCDTiVVgSpN7rh8SrzWgCgwU5bVdkjKLdrPG9wa0YuNwFbhU9SELV6y/8AiRfut/7NVmby9R538dPDiBwBaQQbwQagjkUmPvdl57qbpZ0OMINaseSA0/RdiCMsKL0VoreccFtxr7TrNvFzeK6uswHQJdiOagYpF12Smgc/A9Cqac2ITceNynYjmghL4norCQ5uzeOijbnkgJjHt80pPa3avPRSsRzQV0KzYjmhBVTIO8O/orOyMgoRRRppcgYkTHDuk7ZzKbAvrW/DFAlWoG6O6nsjIKvFNHXXYILKolZ2zmVb2RkEGh05OuhwxsGjnHZByFLyP84rknuJNSSTxJvJ7rodb3eOG391x+K51ed8jVu7Ho/HzJiX+tzIj9W3v6p6raOdVgAxBI/NbSDKcXeXzVElqWry/qvDhlxoB/ZXoMsG3m8+ic1oAoLllWTMiu6tCEIUkQtTrO6kpE6MHm9q2y0GuUWkts/We0eV/wCS6T24RppeLiu41F0w5znS8Rxd4dqGSakU3m1PDAriFs9WopZNwSOL9j+YFv5qzGvrqJeTM1mvXFSfiepSJjSDGb7wDlWp8gsSel4MRwa0+LhUUqeRWq7zLzrF9Nc7xZh7w6hXFBzRQ3DAqrtnMqaJ8xh3VdOgmpvvu4p+yMggXAw7pqrxjQ3XXcErbOZQXkKltHMrKCztjMKERwIIBqVWTIO8O/ogjZnIpsG6tbsMU9ImOHdA3bGYSIjSTUXhKTTHaxm3Ec1rRUuc4gAdSUELM5FQ0hpWDLs240RsNvM3nkG4k9Fwms/tEANnIOa64h8YgkA5MBuPXBedTU0+K8xIj3PccS4kn44Dkp5xb7RunpE5rAyceXwmuDWeAF2L+NdngkLntUneGIP3mn4H5LoV5fyJzyWPV+Pe+OLujJyzfU7pudy5rqWPBAINQbwRxXEq1Jz74e6aji04f2VWdcd3j7fsdchauX00x1zqtPmPNbCHGa7dc09CFZLKpubPZiEIRwLkNeI18JmQe896AehXSx9Iw24uBOQvPwXK6SLY0UxCDgGtB4ALl1InjNtc/AlXPwF2ZwWzlpMMIdUlwIIOFDmFZCFC6tXzMgJreVKG8tcHDEEOHUGqihcS49FgTDXsDmkGrajrkobByK4aVn4kP9m8gY0xHkV1WgdLGMC14Ac0A1GDhnTNeh4/NNfl9vN8vg1n9nps4Iob7ruKdtjMJcxh3VdXqDYwqai+7goWZyKfAw7pqCpZnIoVxCCtYHMIazZ8R4Kwlxt09vVBG3GRVXSE9DhwzEivbDY29znkAX8BmeSkvCdfdYXTc09rXGwhuLIQBucRc59OJJrflRSzn7VzV46rT3tQALmSUPa4WkTA82sxPenRed6V0xMTLtqYiviUNWg7rfusFw8lRQrpmT0rttbGU3B39U5Ikz4B1KeuuN1qvH2YrmH6TLuov9KrrV55Ailj2vbi0hw7LupCcbFhh7f4hxacl5nzfHZr7T09L4fkln1qyhCFhbQhCEDWx3jB7vMqL4jji4nqSVBCHAhCEAhCwTS83DigytLp/TNk1zIZBibJvxEO7E8+ShpXT7WgsgnadgXcG9MyuTmXktcSSSQak8St/wAf4tt+2p+fxi+R8mT/ADn3/VRmkYofaCI/b4mpv6jCi7DVfX6witdMsLm0LXOh0rQ8S03G+huK4VC33xYvLz0wzybks77fS+i9MQJuHaS72vbxzacnNxaequ2BzC+ctV9OvkplkdhOztBsVnB8MnxAjOl45r6Pl47XsbEYQ5rmtewji1wqD5FV6z9TOusNds3Hrcs245qExj2+aUopLNuMihV0IG255IDyTQ4FJTIO8O/og5v2h6VErIRHNJD3/qYfIuBq7s0E+S8BC9T9q0rNzMzDhwZePEhQ4e1tMY5zXRHk1vA4AN8yuCOrE8MZOZ/Df8ldjkivXbWpQtt+jM79kmfw3/JZGq899jmfw3/JT7EeNZCjubcMFbgTO0aUvVj9Fp77HM/hv+SsSerU4CSZWYHAVhv+SdhxXTpaafDdtQ3Fp+B6jiro1em/s0x+G/5LP6OTn2WY/Df8lG/WzldnZex2uim+8QGxYZBO7EZxY8Yjpx7rL4bmmjgQea0eq8CdlY1XS0xZvo2ILN92TxdiPRejugEihaSOYWDy/Fz3/N42+P5ep+anXIoXSv0O114Y4fdr/pKdoDIPHZZ78bc9NE+Vi+/xz6Fe0no58Nos2RYjzwDCQ3qQPgtSYM2cJeJ/I8qu+LcvOLZ5sWdlWFF8Rrd4gKq+RnDjBj9mOHoFXdoeY4wI3dr/AJLs8WnP/XP9Oi6RaN0V5m4LmdNTz3v2S40AFQLhXHBb86ImAK2Eb+R3yWjfoCccS73WYvJP7N/yWv43jk12svyfJ3PI0cePs8CVUiTLnXXALfTmrM6QKSkwSD/xv+So/oxO/ZJn8N/yXo9jz+NShbYasT32SZ/Df8ln9Fp77HM/hv8AknYcrUL2f2TacMSUdLOILoLgG14w3VLfI1HkvLzqxPDGTmfw3/JdJ7P5Cclp5jny0wyG8OhxS5jwGtIJa4kjg4N8yo65Ylnsr2po2rz0uUrEc0QMO6aqFhViOaE5CCipwd4d/RCEFtV5jh3QhAlWYO6O/qhC7XDFSKEJBOFvBW0ISkImOCQhC5XVmBh3KYhC64puxPVZh7w6oQo/9TnpbSZjAdUIXHCFZgbvdCF2FMVN2J6lCFKIssxHUK4hCV0mYwHVV0IQWIGHdOQhcAhCEH//2Q=='

};
  constructor() { }

  ngOnInit() {
  }

}
