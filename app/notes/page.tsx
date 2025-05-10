"use client";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Notes() {
  const [sessionUser, setSessionUser] = useState<User | null>(null);
  const [logged, setLogged] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setSessionUser(session?.user);
        setLogged(true);
      } else {
        setLogged(false);
        router.push("/login");
      }
    };
    checkUser();
  }, []);
  return <></>;
}
