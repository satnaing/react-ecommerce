import FacebookLogo from "../../assets/icons/FacebookLogo";
import InstagramLogo from "../../assets/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className="border-t-2 border-gray100 py-16 px-20 flex justify-between ">
        <div>
          <h6 className={styles.footerHead}>COMPANY</h6>
          <div className={styles.column}>
            <a href="example">About Us</a>
            <a href="example">Contact Us</a>
            <a href="example">Store Location</a>
            <a href="example">Careers</a>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>HELP</h6>
          <div className={styles.column}>
            <a href="example">Order Tracking</a>
            <a href="example">FAQs</a>
            <a href="example">Privacy Policy</a>
            <a href="example">Terms & Conditions</a>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>STORE</h6>
          <div className={styles.column}>
            <a href="example">Women</a>
            <a href="example">Men</a>
            <a href="example">Bags</a>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>KEEP IN TOUCH</h6>
          <div className={styles.column}>
            <span>
              Ground Floor, Yadanar Road, <br />
              Malikha Building, Thingangyun, <br />
              Yangon
            </span>
            <span>+95 95 096 051</span>
            <span>
              Open All Days <br />
              9:00 AM ~ 11:00 PM
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-16">
        <h4 className="text-3xl mb-4">Newsletter</h4>
        <span>Be the first to know about new arrivals, sales & promos!</span>
        <div className="mt-5">
          <Input name="email" type="email" />{" "}
          <Button size="lg" value="Send" extraClass="ml-4" />
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <span className="ml-20">@2020 GOYA. All rights reserved.</span>
        <span className="flex items-center mr-20">
          Follow us on Social Media:{" "}
          <a href="www.facebook.com">
            <FacebookLogo />
          </a>
          <a href="www.ig.com">
            <InstagramLogo />
          </a>
        </span>
      </div>
    </>
  );
}
