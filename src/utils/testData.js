const data = [
    {"DateTime":"1968-03-31","dg":"37.70","tb":""},
    {"DateTime":"1968-04-30","dg":"37.60","tb":""},
    {"DateTime":"1968-05-31","dg":"37.30","tb":""},
    {"DateTime":"1968-06-30","dg":"37.30","tb":""},
    {"DateTime":"1968-07-31","dg":"36.90","tb":""},
    {"DateTime":"1968-08-31","dg":"37.00","tb":""},
    {"DateTime":"1968-09-30","dg":"36.90","tb":""},
    {"DateTime":"1968-10-31","dg":"37.40","tb":""},
    {"DateTime":"1968-11-30","dg":"37.30","tb":""},
    {"DateTime":"1968-12-31","dg":"37.40","tb":""},
    {"DateTime":"1969-01-31","dg":"37.60","tb":""},
    {"DateTime":"1969-02-28","dg":"37.70","tb":""},
    {"DateTime":"1969-03-31","dg":"37.70","tb":"0.00"},
    {"DateTime":"1969-04-30","dg":"38.00","tb":"1.10"},
    {"DateTime":"1969-05-31","dg":"38.10","tb":"2.10"},
    {"DateTime":"1969-06-30","dg":"38.30","tb":"2.70"},
    {"DateTime":"1969-07-31","dg":"38.30","tb":"3.80"},
    {"DateTime":"1969-08-31","dg":"38.30","tb":"3.50"},
    {"DateTime":"1969-09-30","dg":"38.40","tb":"4.10"},
    {"DateTime":"1969-10-31","dg":"38.40","tb":"2.70"},
    {"DateTime":"1969-11-30","dg":"38.50","tb":"3.20"},
    {"DateTime":"1969-12-31","dg":"38.60","tb":"3.20"},
    {"DateTime":"1970-01-31","dg":"39.10","tb":"4.00"},
    {"DateTime":"1970-02-28","dg":"39.10","tb":"3.70"},
    {"DateTime":"1970-03-31","dg":"39.30","tb":"4.20"},
    {"DateTime":"1970-04-30","dg":"39.30","tb":"3.40"},
    {"DateTime":"1970-05-31","dg":"39.40","tb":"3.40"},
    {"DateTime":"1970-06-30","dg":"39.30","tb":"2.60"},
    {"DateTime":"1970-07-31","dg":"39.30","tb":"2.60"},
    {"DateTime":"1970-08-31","dg":"39.30","tb":"2.60"},
    {"DateTime":"1970-09-30","dg":"39.30","tb":"2.30"},
    {"DateTime":"1970-10-31","dg":"39.30","tb":"2.30"},
    {"DateTime":"1970-11-30","dg":"39.30","tb":"2.10"},
    {"DateTime":"1970-12-31","dg":"39.50","tb":"2.30"},
    {"DateTime":"1971-01-31","dg":"40.10","tb":"2.60"},
    {"DateTime":"1971-02-28","dg":"40.20","tb":"2.80"},
    {"DateTime":"1971-03-31","dg":"40.50","tb":"3.10"},
    {"DateTime":"1971-04-30","dg":"40.80","tb":"3.80"},
    {"DateTime":"1971-05-31","dg":"40.60","tb":"3.00"},
    {"DateTime":"1971-06-30","dg":"40.80","tb":"3.80"},
    {"DateTime":"1971-07-31","dg":"40.60","tb":"3.30"},
    {"DateTime":"1971-08-31","dg":"40.20","tb":"2.30"},
    {"DateTime":"1971-09-30","dg":"40.30","tb":"2.50"},
    {"DateTime":"1971-10-31","dg":"40.10","tb":"2.00"},
    {"DateTime":"1971-11-30","dg":"40.10","tb":"2.00"},
    {"DateTime":"1971-12-31","dg":"40.10","tb":"1.50"},
    {"DateTime":"1972-01-31","dg":"40.50","tb":"1.00"},
    {"DateTime":"1972-02-29","dg":"40.90","tb":"1.70"},
    {"DateTime":"1972-03-31","dg":"41.10","tb":"1.50"},
    {"DateTime":"1972-04-30","dg":"41.30","tb":"1.20"},
    {"DateTime":"1972-05-31","dg":"41.40","tb":"2.00"},
    {"DateTime":"1972-06-30","dg":"41.60","tb":"2.00"},
    {"DateTime":"1972-07-31","dg":"41.60","tb":"2.50"},
    {"DateTime":"1972-08-31","dg":"41.70","tb":"3.70"},
    {"DateTime":"1972-09-30","dg":"42.20","tb":"4.70"},
    {"DateTime":"1972-10-31","dg":"42.70","tb":"6.50"},
    {"DateTime":"1972-11-30","dg":"42.70","tb":"6.50"},
    {"DateTime":"1972-12-31","dg":"43.20","tb":"7.70"},
    {"DateTime":"1973-01-31","dg":"43.80","tb":"8.10"},
    {"DateTime":"1973-02-28","dg":"44.40","tb":"8.60"},
    {"DateTime":"1973-03-31","dg":"44.90","tb":"9.20"},
    {"DateTime":"1973-04-30","dg":"45.40","tb":"9.90"},
    {"DateTime":"1973-05-31","dg":"45.40","tb":"9.70"},
    {"DateTime":"1973-06-30","dg":"46.00","tb":"10.60"},
    {"DateTime":"1973-07-31","dg":"46.30","tb":"11.30"},
    {"DateTime":"1973-08-31","dg":"46.10","tb":"10.60"},
    {"DateTime":"1973-09-30","dg":"46.00","tb":"9.00"},
    {"DateTime":"1973-10-31","dg":"46.30","tb":"8.40"},
    {"DateTime":"1973-11-30","dg":"47.30","tb":"10.80"},
    {"DateTime":"1973-12-31","dg":"48.30","tb":"11.80"},
    {"DateTime":"1974-01-31","dg":"49.50","tb":"13.00"},
    {"DateTime":"1974-02-28","dg":"50.50","tb":"13.70"},
    {"DateTime":"1974-03-31","dg":"52.00","tb":"15.80"},
    {"DateTime":"1974-04-30","dg":"52.10","tb":"14.80"},
    {"DateTime":"1974-05-31","dg":"52.10","tb":"14.80"},
    {"DateTime":"1974-06-30","dg":"52.10","tb":"13.30"},
    {"DateTime":"1974-07-31","dg":"51.60","tb":"11.40"},
    {"DateTime":"1974-08-31","dg":"52.10","tb":"13.00"},
    {"DateTime":"1974-09-30","dg":"51.90","tb":"12.80"},
    {"DateTime":"1974-10-31","dg":"52.40","tb":"13.20"},
    {"DateTime":"1974-11-30","dg":"52.50","tb":"11.00"},
    {"DateTime":"1974-12-31","dg":"52.50","tb":"8.70"},
    {"DateTime":"1975-01-31","dg":"53.00","tb":"7.10"},
    {"DateTime":"1975-02-28","dg":"52.80","tb":"4.60"},
    {"DateTime":"1975-03-31","dg":"52.90","tb":"1.70"},
    {"DateTime":"1975-04-30","dg":"53.40","tb":"2.50"},
    {"DateTime":"1975-05-31","dg":"53.20","tb":"2.10"},
    {"DateTime":"1975-06-30","dg":"53.80","tb":"3.30"},
    {"DateTime":"1975-07-31","dg":"53.40","tb":"3.50"},
    {"DateTime":"1975-08-31","dg":"53.50","tb":"2.70"},
    {"DateTime":"1975-09-30","dg":"54.10","tb":"4.20"},
    {"DateTime":"1975-10-31","dg":"54.20","tb":"3.40"},
    {"DateTime":"1975-11-30","dg":"54.00","tb":"2.90"},
    {"DateTime":"1975-12-31","dg":"54.30","tb":"3.40"},
    {"DateTime":"1976-01-31","dg":"55.00","tb":"3.80"},
    {"DateTime":"1976-02-29","dg":"55.70","tb":"5.50"},
    {"DateTime":"1976-03-31","dg":"56.10","tb":"6.00"},
    {"DateTime":"1976-04-30","dg":"56.90","tb":"6.60"},
    {"DateTime":"1976-05-31","dg":"56.90","tb":"7.00"},
    {"DateTime":"1976-06-30","dg":"56.90","tb":"5.80"},
    {"DateTime":"1976-07-31","dg":"56.90","tb":"6.60"},
    {"DateTime":"1976-08-31","dg":"57.40","tb":"7.30"},
    {"DateTime":"1976-09-30","dg":"57.50","tb":"6.30"},
    {"DateTime":"1976-10-31","dg":"57.30","tb":"5.70"},
    {"DateTime":"1976-11-30","dg":"56.90","tb":"5.40"},
    {"DateTime":"1976-12-31","dg":"57.00","tb":"5.00"},
    {"DateTime":"1977-01-31","dg":"57.50","tb":"4.50"},
    {"DateTime":"1977-02-28","dg":"58.00","tb":"4.10"},
    {"DateTime":"1977-03-31","dg":"58.20","tb":"3.70"},
    {"DateTime":"1977-04-30","dg":"58.60","tb":"3.00"},
    {"DateTime":"1977-05-31","dg":"58.60","tb":"3.00"},
    {"DateTime":"1977-06-30","dg":"58.40","tb":"2.60"},
    {"DateTime":"1977-07-31","dg":"57.70","tb":"1.40"},
    {"DateTime":"1977-08-31","dg":"57.40","tb":"0.00"},
    {"DateTime":"1977-09-30","dg":"57.30","tb":"-0.30"},
    {"DateTime":"1977-10-31","dg":"56.90","tb":"-0.70"},
    {"DateTime":"1977-11-30","dg":"56.60","tb":"-0.50"},
    {"DateTime":"1977-12-31","dg":"57.10","tb":"0.20"},
    {"DateTime":"1978-01-31","dg":"57.30","tb":"-0.30"},
    {"DateTime":"1978-02-28","dg":"57.30","tb":"-1.20"},
    {"DateTime":"1978-03-31","dg":"57.40","tb":"-1.40"},
    {"DateTime":"1978-04-30","dg":"57.40","tb":"-2.00"},
    {"DateTime":"1978-05-31","dg":"57.50","tb":"-1.90"},
    {"DateTime":"1978-06-30","dg":"57.50","tb":"-1.50"},
    {"DateTime":"1978-07-31","dg":"57.50","tb":"-0.30"},
    {"DateTime":"1978-08-31","dg":"57.10","tb":"-0.50"},
    {"DateTime":"1978-09-30","dg":"56.80","tb":"-0.90"},
    {"DateTime":"1978-10-31","dg":"56.80","tb":"-0.20"},
    {"DateTime":"1978-11-30","dg":"57.20","tb":"1.10"},
    {"DateTime":"1978-12-31","dg":"57.50","tb":"0.70"},
    {"DateTime":"1979-01-31","dg":"58.20","tb":"1.60"},
    {"DateTime":"1979-02-28","dg":"58.90","tb":"2.80"},
    {"DateTime":"1979-03-31","dg":"60.10","tb":"4.70"},
    {"DateTime":"1979-04-30","dg":"60.70","tb":"5.70"},
    {"DateTime":"1979-05-31","dg":"60.90","tb":"5.90"},
    {"DateTime":"1979-06-30","dg":"61.50","tb":"7.00"},
    {"DateTime":"1979-07-31","dg":"61.90","tb":"7.70"},
    {"DateTime":"1979-08-31","dg":"61.90","tb":"8.40"},
    {"DateTime":"1979-09-30","dg":"62.30","tb":"9.70"},
    {"DateTime":"1979-10-31","dg":"62.30","tb":"9.70"},
    {"DateTime":"1979-11-30","dg":"62.70","tb":"9.60"},
    {"DateTime":"1979-12-31","dg":"63.40","tb":"10.30"},
    {"DateTime":"1980-01-31","dg":"64.60","tb":"11.00"},
    {"DateTime":"1980-02-29","dg":"65.30","tb":"10.90"},
    {"DateTime":"1980-03-31","dg":"65.60","tb":"9.20"},
    {"DateTime":"1980-04-30","dg":"65.70","tb":"8.20"},
    {"DateTime":"1980-05-31","dg":"66.10","tb":"8.50"},
    {"DateTime":"1980-06-30","dg":"66.10","tb":"7.50"},
    {"DateTime":"1980-07-31","dg":"66.10","tb":"6.80"},
    {"DateTime":"1980-08-31","dg":"65.50","tb":"5.80"},
    {"DateTime":"1980-09-30","dg":"65.30","tb":"4.80"},
    {"DateTime":"1980-10-31","dg":"65.50","tb":"5.10"},
    {"DateTime":"1980-11-30","dg":"66.30","tb":"5.70"},
    {"DateTime":"1980-12-31","dg":"67.30","tb":"6.20"},
    {"DateTime":"1981-01-31","dg":"67.80","tb":"5.00"},
    {"DateTime":"1981-02-28","dg":"68.40","tb":"4.70"},
    {"DateTime":"1981-03-31","dg":"69.60","tb":"6.10"},
    {"DateTime":"1981-04-30","dg":"70.10","tb":"6.70"},
    {"DateTime":"1981-05-31","dg":"70.00","tb":"5.90"},
    {"DateTime":"1981-06-30","dg":"70.40","tb":"6.50"},
    {"DateTime":"1981-07-31","dg":"70.90","tb":"7.30"},
    {"DateTime":"1981-08-31","dg":"71.70","tb":"9.50"},
    {"DateTime":"1981-09-30","dg":"72.50","tb":"11.00"},
    {"DateTime":"1981-10-31","dg":"72.70","tb":"11.00"},
    {"DateTime":"1981-11-30","dg":"73.00","tb":"10.10"},
    {"DateTime":"1981-12-31","dg":"73.00","tb":"8.50"},
    {"DateTime":"1982-01-31","dg":"74.20","tb":"9.40"},
    {"DateTime":"1982-02-28","dg":"74.20","tb":"8.50"},
    {"DateTime":"1982-03-31","dg":"73.90","tb":"6.20"},
    {"DateTime":"1982-04-30","dg":"74.00","tb":"5.60"},
    {"DateTime":"1982-05-31","dg":"74.70","tb":"6.70"},
    {"DateTime":"1982-06-30","dg":"75.40","tb":"7.10"},
    {"DateTime":"1982-07-31","dg":"75.30","tb":"6.20"},
    {"DateTime":"1982-08-31","dg":"74.70","tb":"4.20"},
    {"DateTime":"1982-09-30","dg":"74.80","tb":"3.20"},
    {"DateTime":"1982-10-31","dg":"75.30","tb":"3.60"},
    {"DateTime":"1982-11-30","dg":"75.60","tb":"3.60"},
    {"DateTime":"1982-12-31","dg":"75.00","tb":"2.70"},
    {"DateTime":"1983-01-31","dg":"74.30","tb":"0.10"},
    {"DateTime":"1983-02-28","dg":"73.80","tb":"-0.50"},
    {"DateTime":"1983-03-31","dg":"73.60","tb":"-0.40"},
    {"DateTime":"1983-04-30","dg":"73.90","tb":"-0.10"},
    {"DateTime":"1983-05-31","dg":"74.20","tb":"-0.70"},
    {"DateTime":"1983-06-30","dg":"74.70","tb":"-0.90"},
    {"DateTime":"1983-07-31","dg":"74.20","tb":"-1.50"},
    {"DateTime":"1983-08-31","dg":"75.00","tb":"0.40"},
    {"DateTime":"1983-09-30","dg":"75.60","tb":"1.10"},
    {"DateTime":"1983-10-31","dg":"75.60","tb":"0.40"},
    {"DateTime":"1983-11-30","dg":"75.80","tb":"0.30"},
    {"DateTime":"1983-12-31","dg":"76.10","tb":"1.50"},
    {"DateTime":"1984-01-31","dg":"76.50","tb":"3.00"},
    {"DateTime":"1984-02-29","dg":"77.00","tb":"4.30"},
    {"DateTime":"1984-03-31","dg":"76.90","tb":"4.50"},
    {"DateTime":"1984-04-30","dg":"77.20","tb":"4.50"},
    {"DateTime":"1984-05-31","dg":"77.00","tb":"3.80"},
    {"DateTime":"1984-06-30","dg":"77.70","tb":"4.00"},
    {"DateTime":"1984-07-31","dg":"76.90","tb":"3.60"},
    {"DateTime":"1984-08-31","dg":"76.30","tb":"1.70"},
    {"DateTime":"1984-09-30","dg":"76.50","tb":"1.20"},
    {"DateTime":"1984-10-31","dg":"77.00","tb":"1.90"},
    {"DateTime":"1984-11-30","dg":"76.60","tb":"1.10"},
    {"DateTime":"1984-12-31","dg":"76.70","tb":"0.80"},
    {"DateTime":"1985-01-31","dg":"77.10","tb":"0.80"},
    {"DateTime":"1985-02-28","dg":"78.00","tb":"1.30"},
    {"DateTime":"1985-03-31","dg":"78.60","tb":"2.20"},
    {"DateTime":"1985-04-30","dg":"78.20","tb":"1.30"},
    {"DateTime":"1985-05-31","dg":"78.00","tb":"1.30"},
    {"DateTime":"1985-06-30","dg":"77.60","tb":"-0.10"},
    {"DateTime":"1985-07-31","dg":"76.70","tb":"-0.30"},
    {"DateTime":"1985-08-31","dg":"76.20","tb":"-0.10"},
    {"DateTime":"1985-09-30","dg":"76.50","tb":"0.00"},
    {"DateTime":"1985-10-31","dg":"75.80","tb":"-1.60"},
    {"DateTime":"1985-11-30","dg":"75.80","tb":"-1.00"},
    {"DateTime":"1985-12-31","dg":"75.60","tb":"-1.40"},
    {"DateTime":"1986-01-31","dg":"75.50","tb":"-2.10"},
    {"DateTime":"1986-02-28","dg":"73.90","tb":"-5.30"},
    {"DateTime":"1986-03-31","dg":"73.40","tb":"-6.60"},
    {"DateTime":"1986-04-30","dg":"73.00","tb":"-6.60"},
    {"DateTime":"1986-05-31","dg":"72.00","tb":"-7.70"},
    {"DateTime":"1986-06-30","dg":"71.40","tb":"-8.00"},
    {"DateTime":"1986-07-31","dg":"70.00","tb":"-8.70"},
    {"DateTime":"1986-08-31","dg":"69.80","tb":"-8.40"},
    {"DateTime":"1986-09-30","dg":"70.00","tb":"-8.50"},
    {"DateTime":"1986-10-31","dg":"69.20","tb":"-8.70"},
    {"DateTime":"1986-11-30","dg":"68.90","tb":"-9.10"},
    {"DateTime":"1986-12-31","dg":"68.40","tb":"-9.50"},
    {"DateTime":"1987-01-31","dg":"69.00","tb":"-8.60"},
    {"DateTime":"1987-02-28","dg":"68.90","tb":"-6.80"},
    {"DateTime":"1987-03-31","dg":"68.90","tb":"-6.10"},
    {"DateTime":"1987-04-30","dg":"68.90","tb":"-5.60"},
    {"DateTime":"1987-05-31","dg":"68.90","tb":"-4.30"},
    {"DateTime":"1987-06-30","dg":"68.90","tb":"-3.50"},
    {"DateTime":"1987-07-31","dg":"68.80","tb":"-1.70"},
    {"DateTime":"1987-08-31","dg":"68.90","tb":"-1.30"},
    {"DateTime":"1987-09-30","dg":"68.30","tb":"-2.40"},
    {"DateTime":"1987-10-31","dg":"68.60","tb":"-0.90"},
    {"DateTime":"1987-11-30","dg":"68.40","tb":"-0.70"},
    {"DateTime":"1987-12-31","dg":"68.50","tb":"0.10"},
    {"DateTime":"1988-01-31","dg":"68.50","tb":"-0.70"},
    {"DateTime":"1988-02-29","dg":"68.40","tb":"-0.70"},
    {"DateTime":"1988-03-31","dg":"68.50","tb":"-0.60"},
    {"DateTime":"1988-04-30","dg":"69.00","tb":"0.10"},
    {"DateTime":"1988-05-31","dg":"69.00","tb":"0.10"},
    {"DateTime":"1988-06-30","dg":"69.60","tb":"1.00"},
    {"DateTime":"1988-07-31","dg":"69.30","tb":"0.70"},
    {"DateTime":"1988-08-31","dg":"69.30","tb":"0.60"},
    {"DateTime":"1988-09-30","dg":"69.30","tb":"1.50"},
    {"DateTime":"1988-10-31","dg":"69.60","tb":"1.50"},
    {"DateTime":"1988-11-30","dg":"69.80","tb":"2.00"},
    {"DateTime":"1988-12-31","dg":"70.60","tb":"3.10"},
    {"DateTime":"1989-01-31","dg":"71.90","tb":"5.00"},
    {"DateTime":"1989-02-28","dg":"72.00","tb":"5.30"},
    {"DateTime":"1989-03-31","dg":"72.40","tb":"5.70"},
    {"DateTime":"1989-04-30","dg":"73.10","tb":"5.90"},
    {"DateTime":"1989-05-31","dg":"73.30","tb":"6.20"},
    {"DateTime":"1989-06-30","dg":"73.40","tb":"5.50"},
    {"DateTime":"1989-07-31","dg":"72.60","tb":"4.80"},
    {"DateTime":"1989-08-31","dg":"72.40","tb":"4.50"},
    {"DateTime":"1989-09-30","dg":"73.30","tb":"5.80"},
    {"DateTime":"1989-10-31","dg":"73.10","tb":"5.00"},
    {"DateTime":"1989-11-30","dg":"72.90","tb":"4.40"},
    {"DateTime":"1989-12-31","dg":"73.10","tb":"3.50"},
    {"DateTime":"1990-01-31","dg":"73.00","tb":"1.50"},
    {"DateTime":"1990-02-28","dg":"72.40","tb":"0.60"},
    {"DateTime":"1990-03-31","dg":"73.00","tb":"0.80"},
    {"DateTime":"1990-04-30","dg":"73.20","tb":"0.10"},
    {"DateTime":"1990-05-31","dg":"73.50","tb":"0.30"},
    {"DateTime":"1990-06-30","dg":"73.20","tb":"-0.30"},
    {"DateTime":"1990-07-31","dg":"73.00","tb":"0.60"},
    {"DateTime":"1990-08-31","dg":"73.60","tb":"1.70"},
    {"DateTime":"1990-09-30","dg":"73.80","tb":"0.70"},
    {"DateTime":"1990-10-31","dg":"74.20","tb":"1.50"},
    {"DateTime":"1990-11-30","dg":"73.60","tb":"1.00"},
    {"DateTime":"1990-12-31","dg":"73.40","tb":"0.40"},
    {"DateTime":"1991-01-31","dg":"74.00","tb":"1.40"},
    {"DateTime":"1991-02-28","dg":"74.30","tb":"2.60"},
    {"DateTime":"1991-03-31","dg":"73.80","tb":"1.10"},
    {"DateTime":"1991-04-30","dg":"74.00","tb":"1.10"},
    {"DateTime":"1991-05-31","dg":"74.40","tb":"1.20"},
    {"DateTime":"1991-06-30","dg":"74.60","tb":"1.90"},
    {"DateTime":"1991-07-31","dg":"74.90","tb":"2.60"},
    {"DateTime":"1991-08-31","dg":"74.10","tb":"0.70"},
    {"DateTime":"1991-09-30","dg":"74.40","tb":"0.80"},
    {"DateTime":"1991-10-31","dg":"74.50","tb":"0.40"},
    {"DateTime":"1991-11-30","dg":"74.90","tb":"1.80"},
    {"DateTime":"1991-12-31","dg":"74.40","tb":"1.40"},
    {"DateTime":"1992-01-31","dg":"74.60","tb":"0.80"},
    {"DateTime":"1992-02-29","dg":"75.00","tb":"0.90"},
    {"DateTime":"1992-03-31","dg":"75.20","tb":"1.90"},
    {"DateTime":"1992-04-30","dg":"75.50","tb":"2.00"},
    {"DateTime":"1992-05-31","dg":"75.50","tb":"1.50"},
    {"DateTime":"1992-06-30","dg":"75.40","tb":"1.10"},
    {"DateTime":"1992-07-31","dg":"74.40","tb":"-0.70"},
    {"DateTime":"1992-08-31","dg":"73.90","tb":"-0.30"},
    {"DateTime":"1992-09-30","dg":"73.60","tb":"-1.10"},
    {"DateTime":"1992-10-31","dg":"73.60","tb":"-1.20"},
    {"DateTime":"1992-11-30","dg":"73.70","tb":"-1.60"},
    {"DateTime":"1992-12-31","dg":"73.60","tb":"-1.10"},
    {"DateTime":"1993-01-31","dg":"73.90","tb":"-0.90"},
    {"DateTime":"1993-02-28","dg":"74.00","tb":"-1.30"},
    {"DateTime":"1993-03-31","dg":"74.20","tb":"-1.30"},
    {"DateTime":"1993-04-30","dg":"73.90","tb":"-2.10"},
    {"DateTime":"1993-05-31","dg":"73.80","tb":"-2.30"},
    {"DateTime":"1993-06-30","dg":"74.00","tb":"-1.90"},
    {"DateTime":"1993-07-31","dg":"73.90","tb":"-0.70"},
    {"DateTime":"1993-08-31","dg":"73.70","tb":"-0.30"},
    {"DateTime":"1993-09-30","dg":"73.50","tb":"-0.10"},
    {"DateTime":"1993-10-31","dg":"73.20","tb":"-0.50"},
    {"DateTime":"1993-11-30","dg":"73.60","tb":"-0.10"},
    {"DateTime":"1993-12-31","dg":"73.60","tb":"0.00"},
    {"DateTime":"1994-01-31","dg":"73.80","tb":"-0.10"},
    {"DateTime":"1994-02-28","dg":"74.30","tb":"0.40"},
    {"DateTime":"1994-03-31","dg":"74.40","tb":"0.30"},
    {"DateTime":"1994-04-30","dg":"74.70","tb":"1.10"},
    {"DateTime":"1994-05-31","dg":"75.40","tb":"2.20"},
    {"DateTime":"1994-06-30","dg":"76.00","tb":"2.70"},
    {"DateTime":"1994-07-31","dg":"76.60","tb":"3.70"},
    {"DateTime":"1994-08-31","dg":"76.50","tb":"3.80"},
    {"DateTime":"1994-09-30","dg":"76.60","tb":"4.20"},
    {"DateTime":"1994-10-31","dg":"76.20","tb":"4.10"},
    {"DateTime":"1994-11-30","dg":"76.10","tb":"3.40"},
    {"DateTime":"1994-12-31","dg":"76.50","tb":"3.90"},
    {"DateTime":"1995-01-31","dg":"77.00","tb":"4.30"},
    {"DateTime":"1995-02-28","dg":"77.50","tb":"4.30"},
    {"DateTime":"1995-03-31","dg":"77.50","tb":"4.20"},
    {"DateTime":"1995-04-30","dg":"77.40","tb":"3.60"},
    {"DateTime":"1995-05-31","dg":"77.50","tb":"2.80"},
    {"DateTime":"1995-06-30","dg":"77.50","tb":"2.00"},
    {"DateTime":"1995-07-31","dg":"76.80","tb":"0.30"},
    {"DateTime":"1995-08-31","dg":"76.60","tb":"0.10"},
    {"DateTime":"1995-09-30","dg":"76.60","tb":"0.00"},
    {"DateTime":"1995-10-31","dg":"75.90","tb":"-0.40"},
    {"DateTime":"1995-11-30","dg":"75.90","tb":"-0.30"},
    {"DateTime":"1995-12-31","dg":"76.10","tb":"-0.50"},
    {"DateTime":"1996-01-31","dg":"76.20","tb":"-1.00"},
    {"DateTime":"1996-02-29","dg":"76.50","tb":"-1.30"},
    {"DateTime":"1996-03-31","dg":"76.80","tb":"-0.90"},
    {"DateTime":"1996-04-30","dg":"76.80","tb":"-0.80"},
    {"DateTime":"1996-05-31","dg":"77.00","tb":"-0.60"},
    {"DateTime":"1996-06-30","dg":"76.90","tb":"-0.80"},
    {"DateTime":"1996-07-31","dg":"76.70","tb":"-0.10"},
    {"DateTime":"1996-08-31","dg":"76.20","tb":"-0.50"},
    {"DateTime":"1996-09-30","dg":"76.30","tb":"-0.40"},
    {"DateTime":"1996-10-31","dg":"76.50","tb":"0.80"},
    {"DateTime":"1996-11-30","dg":"76.10","tb":"0.30"},
    {"DateTime":"1996-12-31","dg":"76.60","tb":"0.70"},
    {"DateTime":"1997-01-31","dg":"77.40","tb":"1.60"},
    {"DateTime":"1997-02-28","dg":"77.50","tb":"1.30"},
    {"DateTime":"1997-03-31","dg":"77.90","tb":"1.40"},
    {"DateTime":"1997-04-30","dg":"78.00","tb":"1.60"},
    {"DateTime":"1997-05-31","dg":"78.70","tb":"2.20"},
    {"DateTime":"1997-06-30","dg":"78.40","tb":"2.00"},
    {"DateTime":"1997-07-31","dg":"77.70","tb":"1.30"},
    {"DateTime":"1997-08-31","dg":"78.20","tb":"2.60"},
    {"DateTime":"1997-09-30","dg":"78.30","tb":"2.60"},
    {"DateTime":"1997-10-31","dg":"78.00","tb":"2.00"},
    {"DateTime":"1997-11-30","dg":"77.70","tb":"2.10"},
    {"DateTime":"1997-12-31","dg":"78.00","tb":"1.80"},
    {"DateTime":"1998-01-31","dg":"78.00","tb":"0.80"},
    {"DateTime":"1998-02-28","dg":"77.90","tb":"0.50"},
    {"DateTime":"1998-03-31","dg":"77.70","tb":"-0.30"},
    {"DateTime":"1998-04-30","dg":"77.60","tb":"-0.50"},
    {"DateTime":"1998-05-31","dg":"77.30","tb":"-1.80"},
    {"DateTime":"1998-06-30","dg":"76.90","tb":"-1.90"},
    {"DateTime":"1998-07-31","dg":"76.50","tb":"-1.50"},
    {"DateTime":"1998-08-31","dg":"75.70","tb":"-3.20"},
    {"DateTime":"1998-09-30","dg":"75.40","tb":"-3.70"},
    {"DateTime":"1998-10-31","dg":"74.80","tb":"-4.10"},
    {"DateTime":"1998-11-30","dg":"74.60","tb":"-4.00"},
    {"DateTime":"1998-12-31","dg":"74.80","tb":"-4.10"},
    {"DateTime":"1999-01-31","dg":"75.00","tb":"-3.80"},
    {"DateTime":"1999-02-28","dg":"74.80","tb":"-4.00"},
    {"DateTime":"1999-03-31","dg":"75.20","tb":"-3.20"},
    {"DateTime":"1999-04-30","dg":"75.60","tb":"-2.60"},
    {"DateTime":"1999-05-31","dg":"75.60","tb":"-2.20"},
    {"DateTime":"1999-06-30","dg":"75.60","tb":"-1.70"},
    {"DateTime":"1999-07-31","dg":"75.60","tb":"-1.20"},
    {"DateTime":"1999-08-31","dg":"75.70","tb":"0.00"},
    {"DateTime":"1999-09-30","dg":"75.90","tb":"0.70"},
    {"DateTime":"1999-10-31","dg":"75.90","tb":"1.50"},
    {"DateTime":"1999-11-30","dg":"76.60","tb":"2.70"},
    {"DateTime":"1999-12-31","dg":"77.30","tb":"3.30"},
    {"DateTime":"2000-01-31","dg":"77.80","tb":"3.70"},
    {"DateTime":"2000-02-29","dg":"78.40","tb":"4.80"},
    {"DateTime":"2000-03-31","dg":"79.00","tb":"5.10"},
    {"DateTime":"2000-04-30","dg":"78.60","tb":"4.00"},
    {"DateTime":"2000-05-31","dg":"79.10","tb":"4.60"},
    {"DateTime":"2000-06-30","dg":"79.30","tb":"4.90"},
    {"DateTime":"2000-07-31","dg":"79.30","tb":"4.90"},
    {"DateTime":"2000-08-31","dg":"79.40","tb":"4.90"},
    {"DateTime":"2000-09-30","dg":"80.70","tb":"6.30"},
    {"DateTime":"2000-10-31","dg":"80.80","tb":"6.50"},
    {"DateTime":"2000-11-30","dg":"80.80","tb":"5.50"},
    {"DateTime":"2000-12-31","dg":"80.60","tb":"4.30"},
    {"DateTime":"2001-01-31","dg":"80.30","tb":"3.20"},
    {"DateTime":"2001-02-28","dg":"81.00","tb":"3.30"},
    {"DateTime":"2001-03-31","dg":"81.10","tb":"2.70"},
    {"DateTime":"2001-04-30","dg":"81.50","tb":"3.70"},
    {"DateTime":"2001-05-31","dg":"81.90","tb":"3.50"},
    {"DateTime":"2001-06-30","dg":"81.60","tb":"2.90"},
    {"DateTime":"2001-07-31","dg":"80.90","tb":"2.00"},
    {"DateTime":"2001-08-31","dg":"80.60","tb":"1.50"},
    {"DateTime":"2001-09-30","dg":"80.70","tb":"0.00"},
    {"DateTime":"2001-10-31","dg":"80.20","tb":"-0.70"},
    {"DateTime":"2001-11-30","dg":"79.50","tb":"-1.60"},
    {"DateTime":"2001-12-31","dg":"79.70","tb":"-1.10"},
    {"DateTime":"2002-01-31","dg":"80.80","tb":"0.60"},
    {"DateTime":"2002-02-28","dg":"81.00","tb":"0.00"},
    {"DateTime":"2002-03-31","dg":"81.50","tb":"0.50"},
    {"DateTime":"2002-04-30","dg":"81.50","tb":"0.00"},
    {"DateTime":"2002-05-31","dg":"81.10","tb":"-1.00"},
    {"DateTime":"2002-06-30","dg":"80.80","tb":"-1.00"},
    {"DateTime":"2002-07-31","dg":"80.60","tb":"-0.40"},
    {"DateTime":"2002-08-31","dg":"80.40","tb":"-0.20"},
    {"DateTime":"2002-09-30","dg":"81.10","tb":"0.50"},
    {"DateTime":"2002-10-31","dg":"81.10","tb":"1.10"},
    {"DateTime":"2002-11-30","dg":"80.40","tb":"1.10"},
    {"DateTime":"2002-12-31","dg":"80.50","tb":"1.00"},
    {"DateTime":"2003-01-31","dg":"81.60","tb":"1.00"},
    {"DateTime":"2003-02-28","dg":"82.00","tb":"1.20"},
    {"DateTime":"2003-03-31","dg":"82.20","tb":"0.90"},
    {"DateTime":"2003-04-30","dg":"81.40","tb":"-0.10"},
    {"DateTime":"2003-05-31","dg":"80.90","tb":"-0.20"},
    {"DateTime":"2003-06-30","dg":"80.80","tb":"0.00"},
    {"DateTime":"2003-07-31","dg":"80.60","tb":"0.00"},
    {"DateTime":"2003-08-31","dg":"80.90","tb":"0.60"},
    {"DateTime":"2003-09-30","dg":"81.50","tb":"0.50"},
    {"DateTime":"2003-10-31","dg":"81.50","tb":"0.50"},
    {"DateTime":"2003-11-30","dg":"81.50","tb":"1.40"},
    {"DateTime":"2003-12-31","dg":"81.50","tb":"1.20"},
    {"DateTime":"2004-01-31","dg":"81.90","tb":"0.40"},
    {"DateTime":"2004-02-29","dg":"82.00","tb":"0.00"},
    {"DateTime":"2004-03-31","dg":"83.10","tb":"1.10"},
    {"DateTime":"2004-04-30","dg":"83.40","tb":"2.50"},
    {"DateTime":"2004-05-31","dg":"83.80","tb":"3.60"},
    {"DateTime":"2004-06-30","dg":"83.70","tb":"3.60"},
    {"DateTime":"2004-07-31","dg":"83.80","tb":"4.00"},
    {"DateTime":"2004-08-31","dg":"84.20","tb":"4.10"},
    {"DateTime":"2004-09-30","dg":"84.20","tb":"3.30"},
    {"DateTime":"2004-10-31","dg":"84.90","tb":"4.20"},
    {"DateTime":"2004-11-30","dg":"84.80","tb":"4.00"},
    {"DateTime":"2004-12-31","dg":"84.60","tb":"3.80"},
    {"DateTime":"2005-01-31","dg":"84.70","tb":"3.40"},
    {"DateTime":"2005-02-28","dg":"85.20","tb":"3.90"},
    {"DateTime":"2005-03-31","dg":"85.80","tb":"3.20"},
    {"DateTime":"2005-04-30","dg":"86.20","tb":"3.40"},
    {"DateTime":"2005-05-31","dg":"85.50","tb":"2.00"},
    {"DateTime":"2005-06-30","dg":"85.70","tb":"2.40"},
    {"DateTime":"2005-07-31","dg":"86.20","tb":"2.90"},
    {"DateTime":"2005-08-31","dg":"86.20","tb":"2.40"},
    {"DateTime":"2005-09-30","dg":"87.70","tb":"4.20"},
    {"DateTime":"2005-10-31","dg":"87.60","tb":"3.20"},
    {"DateTime":"2005-11-30","dg":"86.80","tb":"2.40"},
    {"DateTime":"2005-12-31","dg":"86.90","tb":"2.70"},
    {"DateTime":"2006-01-31","dg":"87.40","tb":"3.20"},
    {"DateTime":"2006-02-28","dg":"87.80","tb":"3.10"},
    {"DateTime":"2006-03-31","dg":"88.20","tb":"2.80"},
    {"DateTime":"2006-04-30","dg":"89.10","tb":"3.40"},
    {"DateTime":"2006-05-31","dg":"89.70","tb":"4.90"},
    {"DateTime":"2006-06-30","dg":"90.00","tb":"5.00"},
    {"DateTime":"2006-07-31","dg":"89.60","tb":"3.90"},
    {"DateTime":"2006-08-31","dg":"90.20","tb":"4.60"},
    {"DateTime":"2006-09-30","dg":"89.70","tb":"2.30"},
    {"DateTime":"2006-10-31","dg":"89.60","tb":"2.30"},
    {"DateTime":"2006-11-30","dg":"89.70","tb":"3.30"},
    {"DateTime":"2006-12-31","dg":"89.70","tb":"3.20"},
    {"DateTime":"2007-01-31","dg":"89.70","tb":"2.60"},
    {"DateTime":"2007-02-28","dg":"90.10","tb":"2.60"},
    {"DateTime":"2007-03-31","dg":"90.50","tb":"2.60"},
    {"DateTime":"2007-04-30","dg":"91.10","tb":"2.20"},
    {"DateTime":"2007-05-31","dg":"91.50","tb":"2.00"},
    {"DateTime":"2007-06-30","dg":"91.60","tb":"1.80"},
    {"DateTime":"2007-07-31","dg":"91.90","tb":"2.60"},
    {"DateTime":"2007-08-31","dg":"92.90","tb":"3.00"},
    {"DateTime":"2007-09-30","dg":"93.90","tb":"4.70"},
    {"DateTime":"2007-10-31","dg":"94.50","tb":"5.50"},
    {"DateTime":"2007-11-30","dg":"95.60","tb":"6.60"},
    {"DateTime":"2007-12-31","dg":"95.00","tb":"5.90"},
    {"DateTime":"2008-01-31","dg":"96.40","tb":"7.50"},
    {"DateTime":"2008-02-29","dg":"96.10","tb":"6.70"},
    {"DateTime":"2008-03-31","dg":"97.60","tb":"7.80"},
    {"DateTime":"2008-04-30","dg":"97.80","tb":"7.40"},
    {"DateTime":"2008-05-31","dg":"98.80","tb":"8.00"},
    {"DateTime":"2008-06-30","dg":"99.60","tb":"8.70"},
    {"DateTime":"2008-07-31","dg":"101.00","tb":"9.90"},
    {"DateTime":"2008-08-31","dg":"99.20","tb":"6.80"},
    {"DateTime":"2008-09-30","dg":"98.80","tb":"5.20"},
    {"DateTime":"2008-10-31","dg":"97.30","tb":"3.00"},
    {"DateTime":"2008-11-30","dg":"94.00","tb":"-1.70"},
    {"DateTime":"2008-12-31","dg":"91.10","tb":"-4.10"},
    {"DateTime":"2009-01-31","dg":"90.70","tb":"-5.90"},
    {"DateTime":"2009-02-28","dg":"90.60","tb":"-5.70"},
    {"DateTime":"2009-03-31","dg":"89.80","tb":"-8.00"},
    {"DateTime":"2009-04-30","dg":"89.90","tb":"-8.10"},
    {"DateTime":"2009-05-31","dg":"90.00","tb":"-8.90"},
    {"DateTime":"2009-06-30","dg":"90.80","tb":"-8.80"},
    {"DateTime":"2009-07-31","dg":"90.30","tb":"-10.60"},
    {"DateTime":"2009-08-31","dg":"91.00","tb":"-8.30"},
    {"DateTime":"2009-09-30","dg":"90.80","tb":"-8.10"},
    {"DateTime":"2009-10-31","dg":"90.40","tb":"-7.10"},
    {"DateTime":"2009-11-30","dg":"91.10","tb":"-3.10"},
    {"DateTime":"2009-12-31","dg":"91.20","tb":"0.10"},
    {"DateTime":"2010-01-31","dg":"92.40","tb":"1.90"},
    {"DateTime":"2010-02-28","dg":"92.50","tb":"2.10"},
    {"DateTime":"2010-03-31","dg":"93.60","tb":"4.20"},
    {"DateTime":"2010-04-30","dg":"95.10","tb":"5.80"},
    {"DateTime":"2010-05-31","dg":"95.40","tb":"6.00"},
    {"DateTime":"2010-06-30","dg":"95.30","tb":"5.00"},
    {"DateTime":"2010-07-31","dg":"95.00","tb":"5.20"},
    {"DateTime":"2010-08-31","dg":"96.00","tb":"5.50"},
    {"DateTime":"2010-09-30","dg":"96.60","tb":"6.40"},
    {"DateTime":"2010-10-31","dg":"96.30","tb":"6.50"},
    {"DateTime":"2010-11-30","dg":"96.90","tb":"6.40"},
    {"DateTime":"2010-12-31","dg":"98.30","tb":"7.80"},
    {"DateTime":"2011-01-31","dg":"99.30","tb":"7.50"},
    {"DateTime":"2011-02-28","dg":"100.20","tb":"8.30"},
    {"DateTime":"2011-03-31","dg":"101.50","tb":"8.40"},
    {"DateTime":"2011-04-30","dg":"101.70","tb":"6.90"},
    {"DateTime":"2011-05-31","dg":"101.50","tb":"6.40"},
    {"DateTime":"2011-06-30","dg":"101.10","tb":"6.10"},
    {"DateTime":"2011-07-31","dg":"100.90","tb":"6.20"},
    {"DateTime":"2011-08-31","dg":"100.80","tb":"5.00"},
    {"DateTime":"2011-09-30","dg":"101.00","tb":"4.60"},
    {"DateTime":"2011-10-31","dg":"100.20","tb":"4.00"},
    {"DateTime":"2011-11-30","dg":"100.70","tb":"3.90"},
    {"DateTime":"2011-12-31","dg":"100.70","tb":"2.40"},
    {"DateTime":"2012-01-31","dg":"101.80","tb":"2.50"},
    {"DateTime":"2012-02-29","dg":"102.60","tb":"2.40"},
    {"DateTime":"2012-03-31","dg":"103.20","tb":"1.70"},
    {"DateTime":"2012-04-30","dg":"103.70","tb":"2.00"},
    {"DateTime":"2012-05-31","dg":"103.10","tb":"1.60"},
    {"DateTime":"2012-06-30","dg":"102.10","tb":"1.00"},
    {"DateTime":"2012-07-31","dg":"102.20","tb":"1.30"},
    {"DateTime":"2012-08-31","dg":"103.00","tb":"2.20"},
    {"DateTime":"2012-09-30","dg":"104.00","tb":"3.00"},
    {"DateTime":"2012-10-31","dg":"103.40","tb":"3.20"},
    {"DateTime":"2012-11-30","dg":"102.90","tb":"2.20"},
    {"DateTime":"2012-12-31","dg":"102.90","tb":"2.20"},
    {"DateTime":"2013-01-31","dg":"103.20","tb":"1.40"},
    {"DateTime":"2013-02-28","dg":"103.30","tb":"0.70"},
    {"DateTime":"2013-03-31","dg":"103.10","tb":"-0.10"},
    {"DateTime":"2013-04-30","dg":"102.90","tb":"-0.80"},
    {"DateTime":"2013-05-31","dg":"102.40","tb":"-0.70"},
    {"DateTime":"2013-06-30","dg":"102.20","tb":"0.10"},
    {"DateTime":"2013-07-31","dg":"102.10","tb":"-0.10"},
    {"DateTime":"2013-08-31","dg":"101.80","tb":"-1.20"},
    {"DateTime":"2013-09-30","dg":"102.30","tb":"-1.60"},
    {"DateTime":"2013-10-31","dg":"101.50","tb":"-1.80"},
    {"DateTime":"2013-11-30","dg":"101.30","tb":"-1.60"},
    {"DateTime":"2013-12-31","dg":"101.60","tb":"-1.30"},
    {"DateTime":"2014-01-31","dg":"101.50","tb":"-1.60"},
    {"DateTime":"2014-02-28","dg":"101.40","tb":"-1.80"},
    {"DateTime":"2014-03-31","dg":"101.40","tb":"-1.60"},
    {"DateTime":"2014-04-30","dg":"101.60","tb":"-1.30"},
    {"DateTime":"2014-05-31","dg":"101.50","tb":"-0.90"},
    {"DateTime":"2014-06-30","dg":"101.40","tb":"-0.80"},
    {"DateTime":"2014-07-31","dg":"101.50","tb":"-0.60"},
    {"DateTime":"2014-08-31","dg":"101.30","tb":"-0.50"},
    {"DateTime":"2014-09-30","dg":"101.40","tb":"-0.90"},
    {"DateTime":"2014-10-31","dg":"100.80","tb":"-0.70"},
    {"DateTime":"2014-11-30","dg":"100.10","tb":"-1.20"},
    {"DateTime":"2014-12-31","dg":"99.20","tb":"-2.40"},
    {"DateTime":"2015-01-31","dg":"98.80","tb":"-2.70"},
    {"DateTime":"2015-02-28","dg":"99.40","tb":"-2.00"},
    {"DateTime":"2015-03-31","dg":"100.30","tb":"-1.10"},
    {"DateTime":"2015-04-30","dg":"100.70","tb":"-0.90"},
    {"DateTime":"2015-05-31","dg":"101.40","tb":"-0.10"},
    {"DateTime":"2015-06-30","dg":"101.30","tb":"-0.10"},
    {"DateTime":"2015-07-31","dg":"101.30","tb":"-0.20"},
    {"DateTime":"2015-08-31","dg":"100.40","tb":"-0.90"},
    {"DateTime":"2015-09-30","dg":"99.80","tb":"-1.60"},
    {"DateTime":"2015-10-31","dg":"99.30","tb":"-1.50"},
    {"DateTime":"2015-11-30","dg":"99.10","tb":"-1.00"},
    {"DateTime":"2015-12-31","dg":"98.20","tb":"-1.00"},
    {"DateTime":"2016-01-31","dg":"97.80","tb":"-1.00"},
    {"DateTime":"2016-02-29","dg":"97.30","tb":"-2.10"},
    {"DateTime":"2016-03-31","dg":"97.40","tb":"-2.90"},
    {"DateTime":"2016-04-30","dg":"97.60","tb":"-3.10"},
    {"DateTime":"2016-05-31","dg":"98.60","tb":"-2.80"},
    {"DateTime":"2016-06-30","dg":"99.30","tb":"-2.00"},
    {"DateTime":"2016-07-31","dg":"99.50","tb":"-1.80"},
    {"DateTime":"2016-08-31","dg":"98.70","tb":"-1.70"},
    {"DateTime":"2016-09-30","dg":"99.20","tb":"-0.60"},
    {"DateTime":"2016-10-31","dg":"99.50","tb":"0.20"},
    {"DateTime":"2016-11-30","dg":"99.50","tb":"0.40"},
    {"DateTime":"2016-12-31","dg":"100.90","tb":"2.70"},
    {"DateTime":"2017-01-31","dg":"101.60","tb":"3.90"},
    {"DateTime":"2017-02-28","dg":"102.00","tb":"4.80"},
    {"DateTime":"2017-03-31","dg":"101.90","tb":"4.60"},
    {"DateTime":"2017-04-30","dg":"102.30","tb":"4.80"},
    {"DateTime":"2017-05-31","dg":"101.60","tb":"3.00"},
    {"DateTime":"2017-06-30","dg":"101.70","tb":"2.40"},
    {"DateTime":"2017-07-31","dg":"101.60","tb":"2.10"},
    {"DateTime":"2017-08-31","dg":"101.70","tb":"3.00"},
    {"DateTime":"2017-09-30","dg":"102.40","tb":"3.20"},
    {"DateTime":"2017-10-31","dg":"102.20","tb":"2.70"},
    {"DateTime":"2017-11-30","dg":"102.90","tb":"3.40"},
    {"DateTime":"2017-12-31","dg":"102.60","tb":"1.70"},
    {"DateTime":"2018-01-31","dg":"103.40","tb":"1.80"},
    {"DateTime":"2018-02-28","dg":"103.10","tb":"1.10"},
    {"DateTime":"2018-03-31","dg":"103.20","tb":"1.30"},
    {"DateTime":"2018-04-30","dg":"103.50","tb":"1.20"},
    {"DateTime":"2018-05-31","dg":"104.30","tb":"2.70"},
    {"DateTime":"2018-06-30","dg":"105.20","tb":"3.40"},
    {"DateTime":"2018-07-31","dg":"105.30","tb":"3.60"},
    {"DateTime":"2018-08-31","dg":"105.60","tb":"3.80"},
    {"DateTime":"2018-09-30","dg":"106.00","tb":"3.50"},
    {"DateTime":"2018-10-31","dg":"106.30","tb":"4.00"},
    {"DateTime":"2018-11-30","dg":"106.50","tb":"3.50"},
    {"DateTime":"2018-12-31","dg":"105.20","tb":"2.50"},
    {"DateTime":"2019-01-31","dg":"104.50","tb":"1.10"},
    {"DateTime":"2019-02-28","dg":"104.80","tb":"1.60"},
    {"DateTime":"2019-03-31","dg":"105.10","tb":"1.80"},
    {"DateTime":"2019-04-30","dg":"105.70","tb":"2.10"},
    {"DateTime":"2019-05-31","dg":"106.00","tb":"1.60"},
    {"DateTime":"2019-06-30","dg":"105.50","tb":"0.30"},
    {"DateTime":"2019-07-31","dg":"105.20","tb":"-0.10"},
    {"DateTime":"2019-08-31","dg":"104.40","tb":"-1.10"},
    {"DateTime":"2019-09-30","dg":"104.00","tb":"-1.90"},
    {"DateTime":"2019-10-31","dg":"103.90","tb":"-2.30"},
    {"DateTime":"","dg":"","tb":""}
    ]


export default data